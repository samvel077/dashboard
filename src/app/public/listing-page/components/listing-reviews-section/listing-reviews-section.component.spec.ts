import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListingReviewsSectionComponent } from './listing-reviews-section.component';

describe('ListingReviewsSectionComponent', () => {
  let component: ListingReviewsSectionComponent;
  let fixture: ComponentFixture<ListingReviewsSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListingReviewsSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListingReviewsSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
