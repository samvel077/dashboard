import { Injectable } from '@angular/core';
import {
	ActivatedRouteSnapshot,
	Resolve,
	RouterStateSnapshot,
} from '@angular/router';
import { TXModel } from '@tiess/tx-model';
import { AuthService } from './auth.service';
import { DataService } from './data.service';

@Injectable({
	providedIn: 'root',
})
export class DataResolver implements Resolve<any> {
	constructor(
		private dataService: DataService,
		private authService: AuthService
	) {}

	async resolve(
		route: ActivatedRouteSnapshot,
		state: RouterStateSnapshot
	): Promise<{ [k: string]: TXModel | TXModel[] }> {
		if (!route.data?.resolve) {
			console.error(route.data);
			return Promise.reject(new Error('Missing resolve info'));
		}

		return Object.fromEntries(
			await Promise.all(
				Object.entries(route.data.resolve).map(
					async ([key, opts]: [string, any]) => {
						console.log(opts);

						let path: string = opts.path || '';

						if (opts.paths) {
							const v: { [k: string]: any } = {
								userRole: this.authService.getUserRole(),
							};

							l: for (const p of Object.keys(opts.paths)) {
								const cond = opts.paths[p];

								for (const f of Object.keys(cond)) {
									const c = cond[f];
									if (
										Array.isArray(c)
											? c.includes(v[f])
											: c === v[f]
									) {
										path = p;
										break l;
									}
								}
							}
						}

						const tokenData = this.authService.getTokenData();

						console.log('TOKEN DATA', tokenData);

						const pathValues: { [k: string]: string } = {
							...route.params,
							userId: this.authService.getUserID(),
							companyId: tokenData?.company,
						};

						path = path.replace(/:([A-Z]+)/gi, (_, k) => {
							if (pathValues[k] == null) {
								throw new Error(`Missing url var: ${k}`);
							}
							return pathValues[k];
						});

						return opts.isOne
							? this.dataService
									.getOne(path, opts.filter || {}, opts.model)
									.catch((e) =>
										console.error(
											'resolve error',
											console.dir(e)
										)
									)
									.then((d) => [key, d])
							: this.dataService
									.get(path, opts.filter || {}, opts.model)
									.then((d) => [key, d]);
					}
				)
			)
		);
	}
}
