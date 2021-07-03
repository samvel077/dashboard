import { Component, OnInit } from '@angular/core';

export interface List {
	name: string
	text?: string | number
}

@Component({
  selector: 'app-listing-deskprition-section',
  templateUrl: './listing-deskprition-section.component.html',
  styleUrls: ['./listing-deskprition-section.component.scss']
})
export class ListingDeskpritionSectionComponent implements OnInit {
	
	comfort: List[]
	furniture: List[]
	buildings_surroundings: List[]
	transport_parking: List[]

  constructor() { }

  ngOnInit(): void {
	  this.comfort = [
		  {name: 'Lift', text: ''},
		  {name: 'Armored door', text: ''},
		  {name: 'Balcony', text: ''},
		  {name: 'Intercom', text: ''},
		  {name: 'Security', text: ''},
		  {name: 'Safe deposit', text: ''},
		  {name: 'Heating', text: ''},
		  {name: 'Air conditioning', text: ''},
	  ]

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

	this.buildings_surroundings = [
		{name: 'Entrance from the street', text: ''},
		{name: 'Nearby Subway station', text: ''},
		{name: 'Historical building', text: ''},
		{name: 'Code lock', text: ''},
		{name: 'Security', text: ''},
		{name: 'View from the window', text: 'Carriageway'},
		{name: 'Elevator', text: ''},
	]

	this.transport_parking = [
		{name: 'Parking', text: ''},
	]
  }

}
