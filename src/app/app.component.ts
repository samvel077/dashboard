import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/common/util/auth.service';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss'],
})
export class AppComponent {
	title = 'roodit-dashboard';

	constructor(private router: Router, private authService: AuthService) {}

	@HostListener('window:keydown', ['$event'])
	async onKeyDown(e: KeyboardEvent): Promise<void> {
		// console.log(e);
		if (e.key === 'x') {
			await this.authService.logout();
			this.router.navigateByUrl('/login', {
				skipLocationChange: false,
			});
			console.log('reset');
		}
	}
}
