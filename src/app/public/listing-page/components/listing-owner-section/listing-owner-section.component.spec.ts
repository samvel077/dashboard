import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListingOwnerSectionComponent } from './listing-owner-section.component';

describe('ListingOwnerSectionComponent', () => {
  let component: ListingOwnerSectionComponent;
  let fixture: ComponentFixture<ListingOwnerSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListingOwnerSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListingOwnerSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
