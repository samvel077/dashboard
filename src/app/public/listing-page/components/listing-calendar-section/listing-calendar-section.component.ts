import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import { Moment } from 'moment';

@Component({
   selector: 'app-listing-calendar-section',
   templateUrl: './listing-calendar-section.component.html',
   styleUrls: ['./listing-calendar-section.component.scss'],
})
export class ListingCalendarSectionComponent implements OnInit {
   selected: { startDate: Moment, endDate: Moment };
   invalidDates: moment.Moment[] = [moment('05/25/2021', "MM/DD/YYYY").add(0, 'days'), moment('06/12/2021', "MM/DD/YYYY").add(0, 'days')];

   isInvalidDate = (m: moment.Moment) => {
      return this.invalidDates.some(d => d.isSame(m, 'day'))
   }

   local = {
      format: 'MM/DD/YYYY', // could be 'YYYY-MM-DDTHH:mm:ss.SSSSZ'
      displayFormat: 'MM/DD/YYYY', // default is format value
      direction: 'ltr', // could be rtl
      weekLabel: 'W',
      separator: ' To ', // default is ' - '
      customRangeLabel: 'Custom range',
      firstDay: 1, // first day is monday
      monthNames: moment.months().map(e => e.toUpperCase()),
      daysOfWeek: ['Sn', 'Mn', 'Tu', 'Wd', 'Th', 'Fr', 'St'],
   }

   maxDate = moment().add(12, 'months');
   minDate = moment().subtract(0, 'days');

   constructor() {
   }

   ngOnInit(): void {
   }

   choosedDate(event: any) {
      console.log(event);
   }

}
