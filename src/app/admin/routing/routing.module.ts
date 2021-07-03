import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BaseComponent } from '../base/base.component';
import { DashboardComponent } from '../dashboard/dashboard.component';

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
		],
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class RoutingModule {}
