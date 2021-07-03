import { AfterViewChecked, AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { IconsService } from 'src/app/common/icons.service';
import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-listing-viewed-section',
  templateUrl: './listing-viewed-section.component.html',
  styleUrls: ['./listing-viewed-section.component.scss']
})
export class ListingViewedSectionComponent implements OnInit,  AfterViewInit {
  @ViewChild('wrapper')
  wrapper: ElementRef
  data:any = [];
  showMore: boolean;
  constructor(
    public iconServ: IconsService,
    private cdRef:ChangeDetectorRef
  ) { }

  ngOnInit(): void {

    this.data = [
      {img: 'assets/images/Rectangle 5128.png', numberof: '12', favorite: false, meetingroom: 'Meeting room. 10 m', address: "Amsterdam, Noord-Holland, Netherlands", money: '$ 24/DAY', reatinglabel:'2.5', reating: 50 },
      {img: 'assets/images/image 7.png', numberof: '12', favorite: false, meetingroom: 'Meeting room. 10 m', address: "Amsterdam, Noord-Holland, Netherlands", money: '$ 24/DAY', reatinglabel:'2.5', reating: 50 },
      {img: 'assets/images/Rectangle 5128.png', numberof: '12', favorite: false, meetingroom: 'Meeting room. 10 m', address: "Amsterdam, Noord-Holland, Netherlands", money: '$ 24/DAY', reatinglabel:'2.5', reating: 50 },
      {img: 'assets/images/Rectangle 5128.png', numberof: '12', favorite: false, meetingroom: 'Meeting room. 10 m', address: "Amsterdam, Noord-Holland, Netherlands", money: '$ 24/DAY', reatinglabel:'5', reating: 100 },
      {img: 'assets/images/Rectangle 5128.png', numberof: '12', favorite: false, meetingroom: 'Meeting room. 10 m', address: "Amsterdam, Noord-Holland, Netherlands", money: '$ 24/DAY', reatinglabel:'2.5', reating: 50 },
      {img: 'assets/images/Rectangle 5128.png', numberof: '12', favorite: false, meetingroom: 'Meeting room. 10 m', address: "Amsterdam, Noord-Holland, Netherlands", money: '$ 24/DAY', reatinglabel:'2.5', reating: 50 },
      {img: 'assets/images/Rectangle 5128.png', numberof: '12', favorite: false, meetingroom: 'Meeting room. 10 m', address: "Amsterdam, Noord-Holland, Netherlands", money: '$ 24/DAY', reatinglabel:'5', reating: 100 }
    ]

  }

  ngAfterViewInit() {
  this.checkHeight()
  this.cdRef.detectChanges();
  }

  private checkHeight() {
    if(this.wrapper.nativeElement.clientHeight > 260) {
      this.showMore = true
    } else {
      this.showMore = false
    }
  }

  
}
