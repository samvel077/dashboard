import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookingOverviewComponent } from '../booking/booking-overview/booking-overview.component';
import { BaseComponent } from '../base/base.component';
import { BookingDetailComponent } from '../booking/booking-detail/booking-detail.component';
import { CompanyComponent } from '../company/company.component';
import { CreditRequestDetailComponent } from '../company/credit-request-detail/credit-request-detail.component';
import { CreditRequestOverviewComponent } from '../company/credit-request-overview/credit-request-overview.component';
import { EmployeeDetailComponent } from '../company/employee-detail/employee-detail.component';
import { EmployeeOverviewComponent } from '../company/employee-overview/employee-overview.component';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { ProfileComponent } from '../profile/profile.component';

const routes: Routes = [
	{
		path: '',
		component: BaseComponent,
		children: [
			{
				path: '',
				pathMatch: 'full',
				component: DashboardComponent,
			},
			{
				path: 'profile',
				component: ProfileComponent,
			},
			{
				path: 'booking',
				children: [
					{
						path: ':id',
						component: BookingDetailComponent,
					},
					{
						path: '',
						component: BookingOverviewComponent,
					},
				],
			},
			{
				path: 'company',
				component: CompanyComponent,
				children: [
					{
						path: 'employee',
						children: [
							{
								path: ':id',
								component: EmployeeDetailComponent,
							},
							{
								path: '',
								component: EmployeeOverviewComponent,
							},
						],
					},
					{
						path: 'credit-request',
						children: [
							{
								path: ':id',
								component: CreditRequestDetailComponent,
							},
							{
								path: '',
								component: CreditRequestOverviewComponent,
							},
						],
					},
				],
			},
			{
				path: '**',
				redirectTo: '/',
			},
		],
	},
	{
		path: '**',
		redirectTo: '/',
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class RoutingModule {}
