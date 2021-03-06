/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SpaceOverviewComponent } from './space-overview.component';

describe('SpaceOverviewComponent', () => {
	let component: SpaceOverviewComponent;
	let fixture: ComponentFixture<SpaceOverviewComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [SpaceOverviewComponent],
		}).compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(SpaceOverviewComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
