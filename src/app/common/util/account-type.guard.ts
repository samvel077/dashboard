import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { CanLoad, Route, Router, UrlSegment, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/common/util/auth.service';

@Injectable({
	providedIn: 'root',
})
export class AccountTypeGuard implements CanLoad {
	constructor(
		private router: Router,
		@Inject(PLATFORM_ID) private platformId: any,
		private authService: AuthService
	) {}

	canLoad(
		route: Route,
		segments: UrlSegment[]
	):
		| Observable<boolean | UrlTree>
		| Promise<boolean | UrlTree>
		| boolean
		| UrlTree {
		const type = this.authService.getTokenData()?.type;

		if (!type) {
			return this.router.createUrlTree(['/login']);
		}

		const pathOpts: { [k: string]: string } = {
			cc: '/',
			ic: '/consumer',
			re: '/re',
			admin: '/admin',
		};
		const path: string = pathOpts[type];

		console.log(path);

		return type === route.data?.accountType
			? true
			: this.router.createUrlTree([path]);
	}
}
