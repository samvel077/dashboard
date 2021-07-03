import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { IconsService } from 'src/app/common/icons.service';

@Component({
	selector: 'app-delete-modal',
	templateUrl: './delete-modal.component.html',
	styleUrls: ['./delete-modal.component.scss'],
})
export class DeleteModalComponent implements OnInit {
	constructor(
		public dialogRef: MatDialogRef<DeleteModalComponent>,
		@Inject(MAT_DIALOG_DATA) public data: any,
		public iconServ: IconsService
	) {}

	ngOnInit(): void {}

	onClose(): void {
		this.dialogRef.close();
	}
}
