import { Injectable } from '@angular/core';
import {
	ActivatedRouteSnapshot,
	CanActivate,
	RouterStateSnapshot,
} from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
	providedIn: 'root',
})
export class UserRoleGuard implements CanActivate {
	constructor(private authService: AuthService) {}

	canActivate(
		route: ActivatedRouteSnapshot,
		state: RouterStateSnapshot
	): boolean {
		const role = this.authService.getUserRole();

		if (!role) {
			return false;
		}

		return route.data?.requiredRole.includes() || false;
	}
}
