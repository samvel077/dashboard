import { HttpClient } from '@angular/common/http';
import { Inject, Injectable, Optional } from '@angular/core';
import { makeStateKey, TransferState } from '@angular/platform-browser';
import { JwtHelperService } from '@auth0/angular-jwt';
import { REQUEST } from '@nguniversal/express-engine/tokens';
import { Request } from 'express';
import { SESSION_STORAGE, StorageService } from 'ngx-webstorage-service';
import { DataService } from 'src/app/common/util/data.service';

@Injectable({
	providedIn: 'root',
})
export class AuthService {
	jwtService = new JwtHelperService();

	private token?: string;

	constructor(
		private http: HttpClient,
		@Inject(SESSION_STORAGE) private storage: StorageService,
		private transferState: TransferState,
		@Optional() @Inject(REQUEST) request: Request,
		private dataService: DataService
	) {
		const transferKey = makeStateKey<string>('token');

		if (request) {
			this.token = request.cookies?.token;
			this.transferState.set(transferKey, this.token);
		}

		if (this.transferState.hasKey(transferKey)) {
			this.token = this.transferState.get(transferKey, undefined);
		}
	}

	async login(email: string, password: string): Promise<any> {
		return this.dataService
			.add('/auth', { email, password })
			.then((data) => {
				this.setToken(data.token);
				return this.getTokenData();
			});
	}

	async requestPasswordReset(email: string): Promise<void> {
		return this.http
			.post('/api/password-reset-request', { email })
			.toPromise<any>();
	}

	async resetPassword(token: string, password: string): Promise<void> {
		return this.http
			.post('/api/password-reset', { token, password })
			.toPromise<any>();
	}

	async logout(): Promise<void> {
		this.http
			.delete(`${this.dataService.basePath}/auth`)
			.toPromise<any>()
			.then(() => {
				delete this.token;
				location.reload();
			});
	}

	setToken(token: any): void {
		this.token = token;
		// return this.storage.set('token', token);
	}

	getToken(): any {
		return this.token;
		// return this.storage.get('token');
	}

	getTokenData(): any {
		const token = this.getToken();
		return token && this.jwtService.decodeToken(token);
	}

	public isLoggedIn(): boolean {
		const token = this.getToken();
		return token !== null && !this.jwtService.isTokenExpired(token);
	}

	public isLoggedOut(): boolean {
		return !this.isLoggedIn();
	}

	public isAdmin(): boolean {
		return this.isLoggedIn() && this.getTokenData()?.admin === true;
	}

	public getUserID(): string {
		return this.getTokenData()?.sub || null;
	}

	public getUserRole(): string {
		return this.getTokenData()?.role;
	}
}
