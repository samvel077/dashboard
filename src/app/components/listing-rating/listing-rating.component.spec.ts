import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListingRatingComponent } from './listing-rating.component';

describe('ListingRatingComponent', () => {
  let component: ListingRatingComponent;
  let fixture: ComponentFixture<ListingRatingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListingRatingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListingRatingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
