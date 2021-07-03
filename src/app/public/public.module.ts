import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoutingModule } from '../public/routing/routing.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ComponentsModule } from '../components/components.module';
import { NgxGalleryModule } from 'ngx-gallery-9';
import { MatIconModule } from '@angular/material/icon';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatNativeDateModule } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import { NgxDaterangepickerMd } from 'ngx-daterangepicker-material';

import { BaseComponent } from './base/base.component';
import { ListingPageComponent } from './listing-page/listing-page.component';
import { ListingGallerySectionComponent } from './listing-page/components/listing-gallery-section/listing-gallery-section.component';
import { ListingDeskpritionSectionComponent } from './listing-page/components/listing-deskprition-section/listing-deskprition-section.component';
import { ListingCalendarSectionComponent } from './listing-page/components/listing-calendar-section/listing-calendar-section.component';
import { ListingLocationSectionComponent } from './listing-page/components/listing-location-section/listing-location-section.component';
import { ListingReviewsSectionComponent } from './listing-page/components/listing-reviews-section/listing-reviews-section.component';
import { ListingOwnerSectionComponent } from './listing-page/components/listing-owner-section/listing-owner-section.component';
import { ListingViewedSectionComponent } from './listing-page/components/listing-viewed-section/listing-viewed-section.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    BaseComponent,
    ListingPageComponent,
    ListingGallerySectionComponent,
    ListingDeskpritionSectionComponent,
    ListingCalendarSectionComponent,
    ListingLocationSectionComponent,
    ListingReviewsSectionComponent,
    ListingOwnerSectionComponent,
    ListingViewedSectionComponent,
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    RoutingModule,
    FormsModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    NgxGalleryModule,
    MatIconModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatInputModule,
    MatNativeDateModule,
	 NgxDaterangepickerMd.forRoot()
  ],

})
export class PublicModule { }
