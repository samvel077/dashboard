import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ComponentsModule } from '../components/components.module';
import { BaseComponent } from './base/base.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RoutingModule } from './routing/routing.module';

@NgModule({
	declarations: [BaseComponent, DashboardComponent],
	imports: [CommonModule, RoutingModule, ComponentsModule],
})
export class AdminModule {}
