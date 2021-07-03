import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListingDeskpritionSectionComponent } from './listing-deskprition-section.component';

describe('ListingDeskpritionSectionComponent', () => {
  let component: ListingDeskpritionSectionComponent;
  let fixture: ComponentFixture<ListingDeskpritionSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListingDeskpritionSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListingDeskpritionSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
