import { Component, OnInit, HostListener,ElementRef, ViewChild ,Input } from '@angular/core';

@Component({
  selector: 'app-Second-Nav',
  templateUrl: './Second-Nav.component.html',
  styleUrls: ['./Second-Nav.component.scss']
})
export class SecondNavComponent implements OnInit {
  sticky = false;
  @Input() SignOut: Function;
  

  constructor() { }

  ngOnInit() {
  }
  @ViewChild('stickHeader') header: ElementRef;
  @HostListener('window:scroll', [])

  handleScroll() {
    const windowScroll = document.documentElement.scrollTop;

    if (windowScroll) {
      this.sticky = true;
    } else {
      this.sticky = false;
    }
  }
}
