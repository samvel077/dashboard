import { Component, OnInit } from '@angular/core';
import { RooditModels } from '@rooditdev/models';

export interface Balance {
	value: string;
	viewValue: string;
}
export interface PaymentHistory {
	fullName: string;
	img: string;
	description: string;
	amount: string;
	date: string;
}
@Component({
	selector: 'app-financial',
	templateUrl: './financial.component.html',
	styleUrls: ['./financial.component.scss'],
})
export class FinancialComponent implements OnInit {
	balances: Balance[] = [];
	paymentHistory: PaymentHistory[] = [];
	balance = '0';

	transactions?: Array<
		RooditModels.Booking | RooditModels.RE.PayoutTransaction
	>;

	constructor() {}

	ngOnInit(): void {
		this.balances = [
			{ value: '0', viewValue: '120 USD' },
			{ value: '1', viewValue: '200 USD' },
			{ value: '2', viewValue: '260 USD' },
		];

		this.paymentHistory = [
			{
				amount: '+ $ 353.79',
				description: 'Refill',
				img:
					'https://media.istockphoto.com/photos/strong-wifi-connection-makes-for-a-strong-relationship-picture-id1177101210',
				fullName: 'Jane Doe',
				date: '14 Minutes ago',
			},
			{
				amount: '- $ 350.00',
				description: 'Service payment. TOP PLUS Package ',
				img:
					'https://media.istockphoto.com/photos/businesswoman-with-curly-hair-over-white-picture-id685132229?s=612x612',
				fullName: 'System',
				date: '6 Hours ago',
			},
			{
				amount: '+ $ 1353.79',
				description: 'Payment from Deal # 23',
				img:
					'https://media.istockphoto.com/photos/portrait-of-handsome-latino-african-man-picture-id1007763808?s=612x612',
				fullName: 'Jones Dermot',
				date: 'Dec 12, 2020',
			},
			{
				amount: '+ $ 353.79',
				description: 'Payment from Deal # 25',
				img:
					'https://media.istockphoto.com/photos/strong-wifi-connection-makes-for-a-strong-relationship-picture-id1177101210',
				fullName: 'Franz Ferdinand',
				date: '14 Minutes ago',
			},
			{
				amount: '+ $ 353.79',
				description: 'Refill',
				img:
					'https://media.istockphoto.com/photos/businesswoman-with-curly-hair-over-white-picture-id685132229?s=612x612',
				fullName: 'Rebecca Moore',
				date: 'Dec 18, 2020',
			},
			{
				amount: '- $ 350.00',
				description: 'Service payment. TOP PLUS Package ',
				img:
					'https://media.istockphoto.com/photos/businesswoman-with-curly-hair-over-white-picture-id685132229?s=612x612',
				fullName: 'System',
				date: 'Dec 12, 2020',
			},
			{
				amount: '+ $ 353.79',
				description: 'Refill',
				img:
					'https://media.istockphoto.com/photos/strong-wifi-connection-makes-for-a-strong-relationship-picture-id1177101210',
				fullName: 'Jane Doe',
				date: '14 Minutes ago',
			},
			{
				amount: '+ $ 1353.79',
				description: 'Payment from Deal # 23',
				img:
					'https://media.istockphoto.com/photos/strong-wifi-connection-makes-for-a-strong-relationship-picture-id1177101210',
				fullName: 'Jones Dermot',
				date: '14 Minutes ago',
			},
			{
				amount: '- $ 350.00',
				description: 'Service payment. TOP PLUS Package ',
				img:
					'https://media.istockphoto.com/photos/businesswoman-with-curly-hair-over-white-picture-id685132229?s=612x612',
				fullName: 'Jones Dermot',
				date: '6 Hours ago',
			},
			{
				amount: '+ $ 353.79',
				description: 'Payment from Deal # 26',
				img:
					'https://media.istockphoto.com/photos/businesswoman-with-curly-hair-over-white-picture-id685132229?s=612x612',
				fullName: 'Jane Doe',
				date: 'Dec 12, 2020',
			},
			{
				amount: '- $ 350.00',
				description: 'Service payment. TOP PLUS Package ',
				img:
					'https://media.istockphoto.com/photos/businesswoman-with-curly-hair-over-white-picture-id685132229?s=612x612',
				fullName: 'Jones Dermot',
				date: '6 Hours ago',
			},
			{
				amount: '+ $ 353.79',
				description: 'Refill',
				img:
					'https://media.istockphoto.com/photos/strong-wifi-connection-makes-for-a-strong-relationship-picture-id1177101210',
				fullName: 'Jane Doe',
				date: '14 Minutes ago',
			},
		];
	}
}
