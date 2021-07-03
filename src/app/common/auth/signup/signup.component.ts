import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { faKey, faUser } from '@fortawesome/free-solid-svg-icons';
import { RooditModels } from '@rooditdev/models';
import { DataService } from 'src/app/common/util/data.service';
import { PasswordStrengthValidator } from '../password-strength.validators';

@Component({
	selector: 'app-signup',
	templateUrl: './signup.component.html',
	styleUrls: ['../auth.scss', './signup.component.scss'],
})
export class SignupComponent implements OnInit {
	faUser = faUser;
	faKey = faKey;
	formSignup: FormGroup;
	submitted = false;

	constructor(
		private fb: FormBuilder,
		private dataService: DataService,
		private router: Router
	) {
		this.formSignup = this.fb.group({
			company: this.fb.group({
				name: ['', Validators.required],
				address: this.fb.group({
					street: ['', Validators.required],
					number: ['', Validators.required],
					postal: ['', Validators.required],
					city: ['', Validators.required],
					country: ['', Validators.required],
				}),
			}),

			companyAdmin: this.fb.group({
				firstName: ['', Validators.required],
				lastName: ['', Validators.required],
				email: ['', [Validators.required, Validators.email]],
				password: [
					'',
					[
						Validators.required,
						Validators.minLength(8),
						PasswordStrengthValidator,
					],
				],
			}),
		});

		const x = this.formSignup.get('company.name')?.hasError('required');
	}

	ngOnInit(): void {}

	get f(): FormGroup['controls'] {
		return this.formSignup.controls;
	}

	signup(): void {
		this.submitted = true;
		if (this.formSignup?.status === 'VALID') {
			console.log(this.formSignup?.value);

			const registration = RooditModels.RE.CompanyRegistration.create(
				this.formSignup?.value
			);

			this.dataService.add('/re/company-registration', registration).then(
				(tokenData) => {
					alert('check email');
					this.router.navigate(['/login']);
				},
				(err) => {
					alert('something wrong');
				}
			);
		} else {
			console.log('Invalid Data');
		}
	}
}
