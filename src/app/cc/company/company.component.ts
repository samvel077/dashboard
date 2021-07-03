import { Component, OnInit } from '@angular/core';
import { IconsService } from 'src/app/common/icons.service';

@Component({
	selector: 'app-company',
	templateUrl: './company.component.html',
	styleUrls: ['./company.component.scss'],
})
export class CompanyComponent implements OnInit {
	constructor(public iconServ: IconsService) {}

	ngOnInit(): void {}
}
