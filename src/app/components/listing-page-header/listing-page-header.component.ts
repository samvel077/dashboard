import { Component, OnInit } from '@angular/core';
import { IconsService } from 'src/app/common/icons.service';

@Component({
  selector: 'app-listing-page-header',
  templateUrl: './listing-page-header.component.html',
  styleUrls: ['./listing-page-header.component.scss']
})
export class ListingPageHeaderComponent implements OnInit {
  active = false;
  navbarMenu = ['model', 'How it works', 'About us', 'Pricing', 'partners', 'contact']
  userPhoto = 'https://media.istockphoto.com/photos/portrait-of-handsome-latino-african-man-picture-id1007763808?s=612x612'

  constructor(
    public iconServ: IconsService
  ) { }

  ngOnInit(): void {
  }

  showMobileMenu(param:boolean) {
    this.active = param
  }
}
