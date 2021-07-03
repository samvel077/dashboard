import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/common/util/data.service';

@Component({
	templateUrl: './company-verify.component.html',
	styleUrls: ['./company-verify.component.scss'],
})
export class CompanyVerifyComponent implements OnInit {
	public status: boolean | null = null;

	constructor(
		private route: ActivatedRoute,
		private dataService: DataService
	) {}

	ngOnInit(): void {
		this.dataService
			.add(`/${this.route.snapshot.data.prefix}/company-activation`, {
				token: this.route.snapshot.params.token,
			})
			.then(
				() => {
					this.status = true;
				},
				() => {
					this.status = false;
				}
			);
	}
}
