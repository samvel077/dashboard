import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { IconsService } from 'src/app/common/icons.service';
import { DeleteMessageModalComponent } from 'src/app/components/delete-message-modal/delete-message-modal.component';
export interface Booking {
	id: number;
	title: string;
	status: string;
}
@Component({
	templateUrl: './booking-overview.component.html',
	styleUrls: ['./booking-overview.component.scss'],
})
export class BookingOverviewComponent implements OnInit {
	bookings: Booking[] = [];
	message = '';

	constructor(public dialog: MatDialog, public iconServ: IconsService) {}
	ngOnInit(): void {
		this.bookings = [
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

	rejectBooking(id: number) {
		const dialogRef = this.dialog.open(DeleteMessageModalComponent, {
			height: '300px',
			width: '400px',
			data: {
				title: 'Are you sure you want to reject this booking?',
				button: 'Reject booking',
				id,
				message: this.message,
			},
		});

		dialogRef.afterClosed().subscribe((result) => {
			if (result === undefined) {
				return;
			} else {
				this.message = result.message;
				this.bookings = this.bookings.filter(
					(booking) => booking.id !== result.id
				);
			}
			this.message = '';
		});
	}
}
