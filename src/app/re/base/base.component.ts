import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import {
	faBuilding,
	faCalendarCheck,
	faTachometerAltSlow,
	faUser,
} from '@fortawesome/pro-light-svg-icons';
import { RooditModels } from '@rooditdev/models';

@Component({
	templateUrl: './base.component.html',
	styleUrls: ['./base.component.scss'],
})
export class BaseComponent implements OnInit {
	user?: RooditModels.RE.Employee;

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
		{
			label: 'Company',
			url: 'company',
			icon: faBuilding,
		},
		{
			label: 'Financial',
			url: 'company/financial',
			icon: faBuilding,
		},
		{
			label: 'Properties',
			url: 'property',
			icon: faBuilding,
		},
		{
			label: 'Bookings',
			url: 'booking',
			icon: faCalendarCheck,
		},
		{
			label: 'Profile',
			url: 'profile',
			icon: faUser,
		},
	];

	constructor(private router: ActivatedRoute) {}

	ngOnInit(): void {
		this.user = this.router.snapshot.data.resolved?.user;
		console.log('resolved', this.router.snapshot.data);
	}
}
