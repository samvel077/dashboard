import { HttpClient } from '@angular/common/http';
import { Inject, Injectable, Optional } from '@angular/core';
import { REQUEST } from '@nguniversal/express-engine/tokens';
// import { TXModel } from '@tiess/tx-model';
import { Request } from 'express';
import { stringify } from 'query-string';

@Injectable({
	providedIn: 'root',
})
export class DataService {
	public basePath: string;

	constructor(
		private http: HttpClient,
		@Optional() @Inject(REQUEST) request: Request
	) {
		if (request) {
			console.log(request.get('host'));
			this.basePath =
				'//dashboard-backend.services.' +
				request
					.get('host')
					?.match(/((beta\.|local\.)?roodit\.nl)$/)?.[1];
		} else {
			this.basePath =
				'//dashboard-backend.services.' +
				window.location.hostname.match(
					/((beta\.|local\.)?roodit\.nl)$/
				)?.[1];
		}

		console.log(this.basePath);
	}

	async get<T extends any = any>(
		resource: string,
		filter?: any
	): Promise<T[]>;
	async get<T>(
		resource: string,
		asClass: T
	): Promise<InstanceType<any>[]>;
	async get<T>(
		resource: string,
		filter: any,
		asClass: any
	): Promise<InstanceType<any>[]>;
	async get(
		resource: string,
		filterOrAsClass: any,
		_asClass?: any
	): Promise<any> {
		const isClass =
			_asClass == null
				? filterOrAsClass?.prototype
				: false;
		const filter = !isClass ? filterOrAsClass : {};
		const asClass = isClass ? filterOrAsClass : _asClass;

		return this.http
			.get(
				`${this.basePath}/${resource.replace(/^\//, '')}?${stringify(
					filter
				)}`
			)
			.toPromise<any>()
			.then(
				(d: any[]) =>
					asClass && d ? d.map((dd) => new asClass(dd)) : d,
				(e) => {
					console.error('Data error:', e.message);
					throw e;
				}
			);
	}

	async getOne<T extends any = any>(
		resource: string,
		filter?: any
	): Promise<T>;
	async getOne<T>(
		resource: string,
		asClass: T
	): Promise<InstanceType<any>>;
	async getOne<T>(
		resource: string,
		filter: any,
		asClass: T
	): Promise<InstanceType<any>>;
	async getOne<T>(
		resource: string,
		filterOrAsClass: any,
		_asClass?: any
	): Promise<any> {
		const isClass =
			_asClass == null
				? filterOrAsClass?.prototype
				: false;
		const filter = !isClass ? filterOrAsClass : {};
		const asClass: any = isClass ? filterOrAsClass : _asClass;

		return this.http
			.get(
				`${this.basePath}/${resource.replace(/^\//, '')}?${stringify(
					filter
				)}`
			)
			.toPromise<any>()
			.then(
				(d) => d, // asClass && d ? asClass.revive(d) : d,
				(e) => {
					console.error('Data error:', e.message);
					throw e;
				}
			);
	}

	async getID<T extends any = any>(resource: string, id: any): Promise<T>;
	async getID<T>(
		resource: string,
		id: any,
		asClass: T
	): Promise<InstanceType<any>>;
	async getID(resource: string, id: any, asClass?: any): Promise<any> {
		return this.http
			.get(`${this.basePath}/${resource.replace(/^\//, '')}/${id}`)
			.toPromise<any>()
			.then(
				(d) => (asClass && d ? new asClass(d) : d),
				(e) => {
					console.error('Data error:', e.message);
					throw e;
				}
			);
	}

	async add(resource: string, data: any): Promise<any> {
		return this.http
			.post(`${this.basePath}/${resource.replace(/^\//, '')}`, data)
			.toPromise()
			.catch((e) => {
				console.error(e);
				throw e;
			}) as Promise<any>;
	}

	async delete(resource: string, id: any): Promise<any> {
		return this.http
			.delete(`${this.basePath}/${resource.replace(/^\//, '')}/${id}`)
			.toPromise()
			.catch((e) => {
				console.error(e);
				throw e;
			});
	}

	async update(resource: string, data: any): Promise<any> {
		return this.http
			.put(
				`${this.basePath}/${resource.replace(/^\//, '')}/${data._id}`,
				data
			)
			.toPromise()
			.catch((e) => {
				console.error(e);
				throw e;
			});
	}

	resolver(data: Promise<any>): () => any {
		return () => data;
	}

	loadFile(file: string): Promise<any> {
		return this.http.get(file).toPromise<any>();
	}
}
