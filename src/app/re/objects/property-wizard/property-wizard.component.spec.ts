/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PropertyWizardComponent } from './property-wizard.component';

describe('PropertyWizardComponent', () => {
	let component: PropertyWizardComponent;
	let fixture: ComponentFixture<PropertyWizardComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [PropertyWizardComponent],
		}).compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(PropertyWizardComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
