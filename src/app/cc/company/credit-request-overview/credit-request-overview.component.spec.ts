import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreditRequestOverviewComponent } from './credit-request-overview.component';

describe('CreditRequestOverviewComponent', () => {
	let component: CreditRequestOverviewComponent;
	let fixture: ComponentFixture<CreditRequestOverviewComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [CreditRequestOverviewComponent],
		}).compileComponents();
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(CreditRequestOverviewComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
