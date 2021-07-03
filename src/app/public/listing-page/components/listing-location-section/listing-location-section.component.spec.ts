import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListingLocationSectionComponent } from './listing-location-section.component';

describe('ListingLocationSectionComponent', () => {
  let component: ListingLocationSectionComponent;
  let fixture: ComponentFixture<ListingLocationSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListingLocationSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListingLocationSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
