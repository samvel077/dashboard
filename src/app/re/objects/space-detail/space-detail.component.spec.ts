/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SpaceDetailComponent } from './space-detail.component';

describe('SpaceDetailComponent', () => {
	let component: SpaceDetailComponent;
	let fixture: ComponentFixture<SpaceDetailComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [SpaceDetailComponent],
		}).compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(SpaceDetailComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
