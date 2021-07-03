import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompanyVerifyComponent } from 'src/app/common/auth/company-verify/company-verify.component';
import { LoginComponent } from 'src/app/common/auth/login/login.component';
import { SignupComponent } from 'src/app/common/auth/signup/signup.component';
import { AccountTypeGuard } from 'src/app/common/util/account-type.guard';
import { LoggedInGuard } from 'src/app/common/util/logged-in.guard';

const routes: Routes = [
	{
		path: 'login',
		component: LoginComponent,
	},
	{
		path: 'signup',
		component: SignupComponent,
	},
	// {
	// 	path: 're/verify/:token',
	// 	component: CompanyVerifyComponent,
	// 	data: {
	// 		prefix: 're',
	// 	},
	// },
	// {
	// 	path: 're',
	// 	loadChildren: () => import('./re/re.module').then((m) => m.REModule),
	// 	// canLoad: [AccountTypeGuard],
	// 	// data: {
	// 	// 	accountType: 're', // real estate provider
	// 	// },
	// },
	// {
	// 	path: 'admin',
	// 	loadChildren: () =>
	// 		import('./admin/admin.module').then((m) => m.AdminModule),
	// 	// canLoad: [AccountTypeGuard],
	// 	// data: {
	// 	// 	accountType: 'admin',
	// 	// },
	// },
	// {
	// 	path: '',
	// 	loadChildren: () => import('./cc/cc.module').then((m) => m.CCModule),
	// 	// canActivate: [LoggedInGuard],
	// 	// canLoad: [AccountTypeGuard],
	// 	// data: {
	// 	// 	accountType: 'cc', // corporate customer
	// 	// },
	// },
	{
		path: 'listing-page',
		loadChildren: () =>
			 import('./public/public.module').then((m) => m.PublicModule)
	},
	{
		path: '**',
		redirectTo: '/',
	},
];

@NgModule({
	imports: [
		RouterModule.forRoot(routes, {
			initialNavigation: 'enabled',
		}),
	],
	exports: [RouterModule],
})
export class AppRoutingModule {}
