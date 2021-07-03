import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Params } from '@angular/router';
import { IconsService } from 'src/app/common/icons.service';
import { DeleteModalComponent } from 'src/app/components/delete-modal/delete-modal.component';

export interface Spaces {
	id: number;
	title: string;
	status: string;
}

@Component({
	selector: 'app-space-overview',
	templateUrl: './space-overview.component.html',
	styleUrls: ['./space-overview.component.scss'],
})
export class SpaceOverviewComponent implements OnInit {
	spaces: Spaces[] = [];
	propertyId: number;

	constructor(
		public dialog: MatDialog,
		public iconServ: IconsService,
		public route: ActivatedRoute
	) {}

	ngOnInit() {
		this.spaces = [
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

		this.getParams();
	}

	deleteSpace(id: number) {
		const dialogRef = this.dialog.open(DeleteModalComponent, {
			height: '190px',
			width: '400px',
			data: {
				title: 'Are you sure you want to delete this property?',
				id,
			},
		});

		dialogRef.afterClosed().subscribe((result) => {
			this.spaces = this.spaces.filter((space) => space.id !== result);
		});
	}

	private getParams() {
		this.route.params.subscribe((params: Params) => {
			this.propertyId = +params.id;
		});
	}
}
