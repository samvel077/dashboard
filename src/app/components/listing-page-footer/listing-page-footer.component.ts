import { Component, OnInit } from '@angular/core';
import { IconsService } from 'src/app/common/icons.service';

@Component({
  selector: 'app-listing-page-footer',
  templateUrl: './listing-page-footer.component.html',
  styleUrls: ['./listing-page-footer.component.scss']
})
export class ListingPageFooterComponent implements OnInit {
  footerMenu = ['roodit’s model', 'How it works', 'About us', 'Pricing', 'partner', 'FAQ']

  constructor(
  ) { }

  ngOnInit(): void {
  }

}
