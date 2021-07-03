import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListingCalendarSectionComponent } from './listing-calendar-section.component';

describe('ListingCalendarSectionComponent', () => {
  let component: ListingCalendarSectionComponent;
  let fixture: ComponentFixture<ListingCalendarSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListingCalendarSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListingCalendarSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
