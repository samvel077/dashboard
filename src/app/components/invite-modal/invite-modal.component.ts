import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { IconsService } from 'src/app/common/icons.service';

@Component({
	selector: 'app-invite-modal',
	templateUrl: './invite-modal.component.html',
	styleUrls: ['./invite-modal.component.scss'],
})
export class InviteModalComponent implements OnInit {
	constructor(
		public dialogRef: MatDialogRef<InviteModalComponent>,
		@Inject(MAT_DIALOG_DATA) public data: boolean,
		public iconServ: IconsService
	) {}

	ngOnInit(): void {}

	onNoClick(): void {
		this.dialogRef.close();
	}
}
