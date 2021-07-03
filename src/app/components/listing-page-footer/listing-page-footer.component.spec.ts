import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListingPageFooterComponent } from './listing-page-footer.component';

describe('ListingPageFooterComponent', () => {
  let component: ListingPageFooterComponent;
  let fixture: ComponentFixture<ListingPageFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListingPageFooterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListingPageFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
