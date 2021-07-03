import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { IconsService } from 'src/app/common/icons.service';

@Component({
	selector: 'app-delete-message-modal',
	templateUrl: './delete-message-modal.component.html',
	styleUrls: ['./delete-message-modal.component.scss'],
})
export class DeleteMessageModalComponent implements OnInit {
	constructor(
		public dialogRef: MatDialogRef<DeleteMessageModalComponent>,
		@Inject(MAT_DIALOG_DATA) public data: any,
		public iconServ: IconsService
	) {}

	ngOnInit(): void {}

	onClose(): void {
		this.dialogRef.close();
	}

	reject() {
		this.dialogRef.close(this.data);
	}
}
