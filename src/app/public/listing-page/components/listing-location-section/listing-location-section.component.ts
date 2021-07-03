import { Component, OnInit } from '@angular/core';
import { List } from '../listing-deskprition-section/listing-deskprition-section.component';

@Component({
  selector: 'app-listing-location-section',
  templateUrl: './listing-location-section.component.html',
  styleUrls: ['./listing-location-section.component.scss']
})
export class ListingLocationSectionComponent implements OnInit {
  furniture: List[]

  constructor() { }

  ngOnInit(): void {
	this.furniture = [
		{name: 'Cupboard', text: ''},
		{name: 'Tables:', text: 12},
		{name: 'Carpet', text: ''},
		{name: 'Paintings', text: ''},
		{name: 'Kitchenette', text: ''},
		{name: 'Chairs', text: 15},
		{name: 'Sofa', text: 2},
		{name: 'Armchair', text: 2},
	]
  }

}
