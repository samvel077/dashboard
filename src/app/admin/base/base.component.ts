import { Component, OnInit } from '@angular/core';
import {
	IconDefinition,
	faTachometerAltSlow,
} from '@fortawesome/pro-light-svg-icons';

@Component({
	templateUrl: './base.component.html',
	styleUrls: ['./base.component.scss'],
})
export class BaseComponent implements OnInit {
	navItems: {
		label: string;
		url: string;
		icon: IconDefinition;
		children?: any[];
	}[] = [
		{
			label: 'Dashboard',
			url: '.',
			icon: faTachometerAltSlow,
		},
		// {
		// 	label: 'My Objects',
		// 	url: 'property',
		// 	icon: faBuilding
		// },
		// {
		// 	label: 'Financial',
		// 	url: 'company/financial',
		// 	icon: faReceipt
		// },
	];

	constructor() {}

	ngOnInit(): void {}
}
