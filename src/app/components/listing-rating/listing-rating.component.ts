import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-listing-rating',
  templateUrl: './listing-rating.component.html',
  styleUrls: ['./listing-rating.component.scss']
})
export class ListingRatingComponent implements OnInit {
  @Input() ratingWidth:number;
  @Input() singleRatingWith:number;
  @Input() singleRatingWithMidSize:number;
  @Input() singleRatingWithBigSize:number;

  constructor() { }

  ngOnInit(): void {
  }

}
