import { Component, OnInit } from '@angular/core';
import { IconsService } from 'src/app/common/icons.service';
export interface Properties {
	id: number;
	title: string;
	status: string;
}
@Component({
	selector: 'app-property-overview',
	templateUrl: './property-overview.component.html',
	styleUrls: ['./property-overview.component.scss'],
})
export class PropertyOverviewComponent implements OnInit {
	properties: Properties[] = [];

	constructor(public iconServ: IconsService) {}

	ngOnInit() {
		this.properties = [
			{ id: 1, title: 'Refill', status: 'pending' },
			{ id: 2, title: 'Service payment', status: 'booked' },
			{ id: 3, title: 'Payment from', status: 'pending' },
			{ id: 4, title: 'Payment from', status: 'ignored' },
			{ id: 5, title: 'Refill', status: 'booked' },
			{ id: 6, title: 'Service payment', status: 'ignored' },
			{ id: 7, title: 'Refill', status: 'pending' },
			{ id: 8, title: 'Refill', status: 'pending' },
			{ id: 9, title: 'Service payment', status: 'booked' },
			{ id: 10, title: 'Payment from', status: 'pending' },
			{ id: 11, title: 'Payment from', status: 'ignored' },
			{ id: 12, title: 'Refill', status: 'booked' },
			{ id: 13, title: 'Service payment', status: 'ignored' },
			{ id: 14, title: 'Refill', status: 'pending' },
		];
	}

	deleteProperty(id: number) {
		this.properties = this.properties.filter(
			(property) => property.id !== id
		);
	}
}
