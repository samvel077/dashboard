import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
// import { RooditModels } from '@rooditdev/models';
import { IconsService } from 'src/app/common/icons.service';
import { AuthService } from 'src/app/common/util/auth.service';

@Component({
	selector: 'app-sidebar',
	templateUrl: './sidebar.component.html',
	styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
	@Input() items: any[] = [];
	@Input() user?: any;

	iconLogout = faSignOutAlt;

	constructor(
		public iconServ: IconsService,
		private authService: AuthService,
		private router: Router
	) {}

	ngOnInit(): void {}

	async logout(): Promise<void> {
		await this.authService.logout();
		this.router.navigateByUrl('/login');
	}
}
