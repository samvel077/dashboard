import { Component, OnInit } from '@angular/core';
import { NgxGalleryOptions, NgxGalleryImage, NgxGalleryAnimation } from 'ngx-gallery-9';
import { IconsService } from 'src/app/common/icons.service';
import {
   faChevronLeft,
   faChevronRight,
} from '@fortawesome/pro-light-svg-icons';

@Component({
   selector: 'app-listing-gallery-section',
   templateUrl: './listing-gallery-section.component.html',
   styleUrls: ['./listing-gallery-section.component.scss'],
})
export class ListingGallerySectionComponent implements OnInit {
   galleryOptions: NgxGalleryOptions[];
   galleryImages: NgxGalleryImage[];
   prevIcon = faChevronLeft;
   nextIcon = faChevronRight;

   date = ''
   constructor(
      public iconServ: IconsService
   ) { }

   ngOnInit(): void {
      this.prevIcon = this.iconServ.faChevronRight

      this.galleryOptions = [
         {
            width: '100%',
            height: '625px',
            thumbnailsColumns: 3,
            imageArrows: false,
            imageAnimation: NgxGalleryAnimation.Slide,
            previewArrows: false,
            previewCloseOnEsc: true,
            closeIcon: 'fas fa-times',
            thumbnailsMargin: 27,
            thumbnailMargin: 36,
            arrowPrevIcon: 'fas fa-chevron-left',
            arrowNextIcon: 'fas fa-chevron-right',
            imageDescription: true,
            imageActions: [

            ],
         },
         // max-width 800
         {
            height: '480px',
            breakpoint: 767,
            imagePercent: 65,
            thumbnailsPercent: 35,
            thumbnailsColumns: 2,
            thumbnailsSwipe: true,
            thumbnailMargin: 15
         },
         // max-width 400
         {
            breakpoint: 400,
            preview: false,
         }
      ];

      this.galleryImages = [
         {

            small: 'https://media.istockphoto.com/photos/portrait-of-handsome-latino-african-man-picture-id1007763808?s=612x612',
            medium: 'https://media.istockphoto.com/photos/portrait-of-handsome-latino-african-man-picture-id1007763808?s=612x612',
            big: 'https://media.istockphoto.com/photos/portrait-of-handsome-latino-african-man-picture-id1007763808?s=612x612',

         },
         {
            small: 'https://media.istockphoto.com/photos/strong-wifi-connection-makes-for-a-strong-relationship-picture-id1177101210',
            medium: 'https://media.istockphoto.com/photos/strong-wifi-connection-makes-for-a-strong-relationship-picture-id1177101210',
            big: 'https://media.istockphoto.com/photos/strong-wifi-connection-makes-for-a-strong-relationship-picture-id1177101210',
         },
         {
            small: 'https://media.istockphoto.com/photos/thoughtful-pretty-woman-leaning-on-a-wall-picture-id1135810757?s=612x612',
            medium: 'https://media.istockphoto.com/photos/thoughtful-pretty-woman-leaning-on-a-wall-picture-id1135810757?s=612x612',
            big: 'https://media.istockphoto.com/photos/thoughtful-pretty-woman-leaning-on-a-wall-picture-id1135810757?s=612x612',
         },
         {
            small: 'https://media.istockphoto.com/photos/thoughtful-pretty-woman-leaning-on-a-wall-picture-id1135810757?s=612x612',
            medium: 'https://media.istockphoto.com/photos/thoughtful-pretty-woman-leaning-on-a-wall-picture-id1135810757?s=612x612',
            big: 'https://media.istockphoto.com/photos/thoughtful-pretty-woman-leaning-on-a-wall-picture-id1135810757?s=612x612',
         },
         {

            small: 'https://media.istockphoto.com/photos/portrait-of-handsome-latino-african-man-picture-id1007763808?s=612x612',
            medium: 'https://media.istockphoto.com/photos/portrait-of-handsome-latino-african-man-picture-id1007763808?s=612x612',
            big: 'https://media.istockphoto.com/photos/portrait-of-handsome-latino-african-man-picture-id1007763808?s=612x612',
         },
         {
            small: 'https://media.istockphoto.com/photos/strong-wifi-connection-makes-for-a-strong-relationship-picture-id1177101210',
            medium: 'https://media.istockphoto.com/photos/strong-wifi-connection-makes-for-a-strong-relationship-picture-id1177101210',
            big: 'https://media.istockphoto.com/photos/strong-wifi-connection-makes-for-a-strong-relationship-picture-id1177101210',
         },
         {
            small: 'https://media.istockphoto.com/photos/thoughtful-pretty-woman-leaning-on-a-wall-picture-id1135810757?s=612x612',
            medium: 'https://media.istockphoto.com/photos/thoughtful-pretty-woman-leaning-on-a-wall-picture-id1135810757?s=612x612',
            big: 'https://media.istockphoto.com/photos/thoughtful-pretty-woman-leaning-on-a-wall-picture-id1135810757?s=612x612',
         },
         {
            small: 'https://media.istockphoto.com/photos/thoughtful-pretty-woman-leaning-on-a-wall-picture-id1135810757?s=612x612',
            medium: 'https://media.istockphoto.com/photos/thoughtful-pretty-woman-leaning-on-a-wall-picture-id1135810757?s=612x612',
            big: 'https://media.istockphoto.com/photos/thoughtful-pretty-woman-leaning-on-a-wall-picture-id1135810757?s=612x612',
         }
      ];
   }
}
