import { Component, OnInit } from '@angular/core';
import { IconsService } from 'src/app/common/icons.service';
@Component({
	selector: 'app-header-component',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
	constructor(public iconServ: IconsService) {}

	ngOnInit(): void {}
}
