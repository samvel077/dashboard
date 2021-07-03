import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RooditModels } from '@rooditdev/models';
import { DataResolver } from 'src/app/common/util/data.resolver';
import { BookingOverviewComponent } from 'src/app/re/booking/booking-overview/booking-overview.component';
import { BaseComponent } from '../base/base.component';
import { EmployeeDetailComponent } from '../company/employee-detail/employee-detail.component';
import { EmployeeListComponent } from '../company/employee-list/employee-list.component';
import { FinancialComponent } from '../company/financial/financial.component';
import { PlanComponent } from '../company/plan/plan.component';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { PropertyDetailComponent } from '../objects/property-detail/property-detail.component';
import { PropertyOverviewComponent } from '../objects/property-overview/property-overview.component';
import { PropertyWizardComponent } from '../objects/property-wizard/property-wizard.component';
import { SpaceDetailComponent } from '../objects/space-detail/space-detail.component';
import { SpaceOverviewComponent } from '../objects/space-overview/space-overview.component';
import { SpaceWizardComponent } from '../objects/space-wizard/space-wizard.component';

const routes: Routes = [
	{
		path: '',
		component: BaseComponent,
		data: {
			resolve: {
				user: {
					path: '/re/company/:companyId/employee/:userId',
					model: RooditModels.RE.Employee,
					isOne: true,
				},
			},
		},
		resolve: {
			resolved: DataResolver,
		},
		children: [
			{
				path: '',
				pathMatch: 'full',
				component: DashboardComponent,
			},
			{
				path: 'booking',
				children: [
					{
						path: '',
						component: BookingOverviewComponent,
					},
				],
			},
			{
				path: 'company',
				children: [
					{
						path: 'plan',
						component: PlanComponent,
					},
					{
						path: 'financial',
						component: FinancialComponent,
					},
					{
						path: 'employee',
						component: EmployeeListComponent,
					},
					{
						path: 'employee/:id',
						component: EmployeeDetailComponent,
					},
				],
			},
			{
				path: 'property',
				component: PropertyOverviewComponent,
			},
			{
				path: 'property/new',
				component: PropertyWizardComponent,
			},
			{
				path: 'property/:id',
				component: PropertyDetailComponent,
			},
			{
				path: 'property/:id/space',
				component: SpaceOverviewComponent,
			},
			{
				path: 'property/:propertyId/space/new',
				component: SpaceWizardComponent,
			},
			{
				path: 'property/:propertyId/space/:spaceId',
				component: SpaceDetailComponent,
			},
		],
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class RoutingModule {}
