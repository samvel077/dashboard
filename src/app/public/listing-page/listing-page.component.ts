import { Component, OnInit } from '@angular/core';
import { IconsService } from 'src/app/common/icons.service';

@Component({
  selector: 'app-listing-page',
  templateUrl: './listing-page.component.html',
  styleUrls: ['./listing-page.component.scss']
})
export class ListingPageComponent implements OnInit {

  constructor(
    public iconServ: IconsService
  ) { }

  ngOnInit(): void {
  }

}
