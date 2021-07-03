import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { IconsService } from 'src/app/common/icons.service';
import { InviteModalComponent } from 'src/app/components/invite-modal/invite-modal.component';
export interface Date {
	value: string;
	viewValue: string;
}

export class Employee {
	fullName?: string;
	img?: string;
	requests?: string;
	deals?: string;
	earnings?: string;
	activity?: string;
	checkbox?: boolean;
	id?: number;
}
@Component({
	templateUrl: './employee-overview.component.html',
	styleUrls: ['./employee-overview.component.scss'],
})
export class EmployeeOverviewComponent implements OnInit {
	public slectDate: Date[] = [];
	public request: Date[] = [];
	public completed: Date[] = [];
	public employess: Employee[] = [];
	isSecontBackdrop?: boolean;
	selectedDate = '0';
	requestOption = '0';
	completedOption = '0';

	constructor(public dialog: MatDialog, public iconServ: IconsService) {}

	ngOnInit(): void {
		this.slectDate = [
			{ value: '0', viewValue: 'Date' },
			{ value: '1', viewValue: 'online' },
		];

		this.request = [
			{ value: '0', viewValue: 'All' },
			{ value: '2', viewValue: 'Earings' },
			{ value: '3', viewValue: 'Activity' },
			{ value: '4', viewValue: 'Deals' },
		];

		this.completed = [
			{ value: '0', viewValue: 'Completed' },
			{ value: '2', viewValue: 'Avaiting invited' },
			{ value: '3', viewValue: 'In Review' },
			{ value: '4', viewValue: 'Finished' },
		];

		this.isSecontBackdrop = false;

		this.employess = this.employees();
	}

	employees(): Employee[] {
		const e = [];
		const n = Math.round(Math.random() * 10 + 10);

		for (let i = 0; i < n; i++) {
			e.push(
				Object.assign(new Employee(), {
					fullName:
						['John', 'Jane', 'James', 'Michael'][
							Math.floor(Math.random() * 4)
						] +
						' ' +
						['Doe', 'Smith', 'Johnson', 'Jones'][
							Math.floor(Math.random() * 4)
						],
					img: [
						'https://media.istockphoto.com/photos/portrait-of-handsome-latino-african-man-picture-id1007763808?s=612x612',
						'https://media.istockphoto.com/photos/strong-wifi-connection-makes-for-a-strong-relationship-picture-id1177101210',
						'https://media.istockphoto.com/photos/thoughtful-pretty-woman-leaning-on-a-wall-picture-id1135810757?s=612x612',
						'https://media.istockphoto.com/photos/businesswoman-with-curly-hair-over-white-picture-id685132229?s=612x612',
					][Math.floor(Math.random() * 4)],
					requests: ['23', '1', '3', '2'][
						Math.floor(Math.random() * 4)
					],
					deals: ['3', '7', '1', '0'][Math.floor(Math.random() * 4)],
					earnings: [
						'$ 2.342.06',
						'$ 1.213.67',
						'$ 60.563.40',
						'$ 3.457.61',
					][Math.floor(Math.random() * 4)],
					activity: [
						'6 Minutes ago',
						'online',
						'Dec 11, 2020',
						'Dec 6, 2020',
					][Math.floor(Math.random() * 4)],
					checkbox: [false, false, false, false][
						Math.floor(Math.random() * 4)
					],
				})
			);
		}

		return e;
	}

	openInvite(): void {
		const dialogRef = this.dialog.open(InviteModalComponent, {
			data: this.isSecontBackdrop,
		});

		dialogRef.afterClosed().subscribe((result) => {
			this.isSecontBackdrop = result;
		});
	}
}
