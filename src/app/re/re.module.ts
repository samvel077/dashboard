import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatSelectModule } from '@angular/material/select';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ComponentsModule } from '../components/components.module';
import { BaseComponent } from './base/base.component';
import { BookingOverviewComponent } from './booking/booking-overview/booking-overview.component';
import { FinancialComponent } from './company/financial/financial.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PropertyOverviewComponent } from './objects/property-overview/property-overview.component';
import { SpaceOverviewComponent } from './objects/space-overview/space-overview.component';
import { RoutingModule } from './routing/routing.module';

@NgModule({
	declarations: [
		DashboardComponent,
		BaseComponent,
		FinancialComponent,
		SpaceOverviewComponent,
		PropertyOverviewComponent,
		BookingOverviewComponent,
	],
	imports: [
		CommonModule,
		RoutingModule,
		FormsModule,
		ComponentsModule,
		FontAwesomeModule,
		MatDialogModule,
		MatSelectModule,
		MatExpansionModule,
	],
})
export class REModule {}
