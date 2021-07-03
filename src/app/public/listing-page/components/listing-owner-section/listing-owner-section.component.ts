import { IconsService } from './../../../../common/icons.service';
import { Component, OnInit } from '@angular/core';

@Component({
   selector: 'app-listing-owner-section',
   templateUrl: './listing-owner-section.component.html',
   styleUrls: ['./listing-owner-section.component.scss']
})
export class ListingOwnerSectionComponent implements OnInit {

   constructor(
      public iconServ: IconsService
   ) { }

   ngOnInit(): void {
   }

}
