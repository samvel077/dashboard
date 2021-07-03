import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListingViewedSectionComponent } from './listing-viewed-section.component';

describe('ListingViewedSectionComponent', () => {
  let component: ListingViewedSectionComponent;
  let fixture: ComponentFixture<ListingViewedSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListingViewedSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListingViewedSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
