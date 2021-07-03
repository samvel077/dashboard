import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { faKey, faUser } from '@fortawesome/free-solid-svg-icons';
import { AuthService } from 'src/app/common/util/auth.service';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['../auth.scss', './login.component.scss'],
})
export class LoginComponent implements OnInit {
	faUser = faUser;
	faKey = faKey;
	formLogin: FormGroup;
	submitted = false;

	constructor(
		private formBuilder: FormBuilder,
		private authService: AuthService,
		private router: Router
	) {
		this.formLogin = this.formBuilder.group({
			email: ['', [Validators.required, Validators.email]],
			password: ['', Validators.required],
		});
	}

	ngOnInit(): void {}

	get f(): FormGroup['controls'] {
		return this.formLogin?.controls;
	}

	async login(): Promise<void> {
		this.submitted = true;
		if (this.formLogin?.status === 'VALID') {
			console.log('login', this.formLogin?.value);

			await this.authService
				.login(
					this.formLogin.value.email,
					this.formLogin.value.password
				)
				.then(
					(tokenData) => {
						const type = tokenData.type;
						const pathOpts: { [k: string]: string } = {
							cc: '/',
							ic: '/consumer',
							re: '/re',
							admin: '/admin',
						};
						const path: string = pathOpts[type];
						this.router.navigate([path]);
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
