import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListingGallerySectionComponent } from './listing-gallery-section.component';

describe('ListingGallerySectionComponent', () => {
  let component: ListingGallerySectionComponent;
  let fixture: ComponentFixture<ListingGallerySectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListingGallerySectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListingGallerySectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
