import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatSelectModule } from '@angular/material/select';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ComponentsModule } from '../components/components.module';
import { BaseComponent } from './base/base.component';
import { BookingDetailComponent } from './booking/booking-detail/booking-detail.component';
import { BookingOverviewComponent } from './booking/booking-overview/booking-overview.component';
import { CompanyComponent } from './company/company.component';
import { CreditRequestDetailComponent } from './company/credit-request-detail/credit-request-detail.component';
import { CreditRequestOverviewComponent } from './company/credit-request-overview/credit-request-overview.component';
import { EmployeeDetailComponent } from './company/employee-detail/employee-detail.component';
import { EmployeeOverviewComponent } from './company/employee-overview/employee-overview.component';
import { PaymentSettingsComponent } from './company/payment-settings/payment-settings.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProfileComponent } from './profile/profile.component';
import { RoutingModule } from './routing/routing.module';

@NgModule({
	declarations: [
		BaseComponent,
		DashboardComponent,
		BookingDetailComponent,
		BookingOverviewComponent,
		PaymentSettingsComponent,
		EmployeeOverviewComponent,
		EmployeeDetailComponent,
		ProfileComponent,
		CreditRequestOverviewComponent,
		CreditRequestDetailComponent,
		CompanyComponent,
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
export class CCModule {}
