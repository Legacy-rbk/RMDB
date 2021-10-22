import { Component, OnInit, HostListener,ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-Second-Nav',
  templateUrl: './Second-Nav.component.html',
  styleUrls: ['./Second-Nav.component.scss']
})
export class SecondNavComponent implements OnInit {
  sticky = false;

  constructor() { }

  ngOnInit() {
  }
  @ViewChild('stickHeader') header: ElementRef;
  @HostListener('window:scroll', [])

  handleScroll() {
    const windowScroll = document.documentElement.scrollTop;

    if (windowScroll>=50) {
      this.sticky = true;
    } else {
      this.sticky = false;
    }
  }
}
