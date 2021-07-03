import { Component, Input, OnInit } from '@angular/core';
import { faKey, faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
	selector: 'app-auth-header',
	templateUrl: './auth-header.component.html',
	styleUrls: ['./auth-header.component.scss'],
})
export class AuthHeaderComponent implements OnInit {
	@Input() label?: string;
	@Input() buttonLabel?: string;
	@Input() link?: string;

	faTimes = faTimes;
	faKey = faKey;

	constructor() {}

	ngOnInit(): void {}
}
