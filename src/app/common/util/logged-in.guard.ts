import { Injectable } from '@angular/core';
import {
	ActivatedRouteSnapshot,
	CanActivate,
	CanActivateChild,
	CanLoad,
	Route,
	Router,
	RouterStateSnapshot,
	UrlSegment,
	UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
	providedIn: 'root',
})
export class LoggedInGuard implements CanActivateChild, CanActivate, CanLoad {
	constructor(private router: Router) {
		console.log('LOGGEDINGUARD');
	}

	canLoad(
		route: Route,
		segments: UrlSegment[]
	):
		| boolean
		| UrlTree
		| Observable<boolean | UrlTree>
		| Promise<boolean | UrlTree> {
		console.log('to login?', sessionStorage.getItem('user-type') != null);
		return sessionStorage.getItem('user-type') != null
			? true
			: this.router.createUrlTree(['/login']);
	}

	canActivate(
		route: ActivatedRouteSnapshot,
		state: RouterStateSnapshot
	): true | UrlTree {
		console.log('to login?', sessionStorage.getItem('user-type') != null);
		return sessionStorage.getItem('user-type') != null
			? true
			: this.router.createUrlTree(['/login']);
	}

	canActivateChild(
		childRoute: ActivatedRouteSnapshot,
		state: RouterStateSnapshot
	): true | UrlTree {
		console.log('to login?', sessionStorage.getItem('user-type') != null);
		return sessionStorage.getItem('user-type') != null
			? true
			: this.router.createUrlTree(['/login']);
	}
}
