/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SpaceWizardComponent } from './space-wizard.component';

describe('SpaceWizardComponent', () => {
	let component: SpaceWizardComponent;
	let fixture: ComponentFixture<SpaceWizardComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [SpaceWizardComponent],
		}).compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(SpaceWizardComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
