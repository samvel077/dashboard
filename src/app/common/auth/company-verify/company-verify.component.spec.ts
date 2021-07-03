import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyVerifyComponent } from './company-verify.component';

describe('CompanyVerifyComponent', () => {
	let component: CompanyVerifyComponent;
	let fixture: ComponentFixture<CompanyVerifyComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [CompanyVerifyComponent],
		}).compileComponents();
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(CompanyVerifyComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
