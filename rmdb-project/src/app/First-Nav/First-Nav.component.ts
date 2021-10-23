import { Component, OnInit, HostListener, ElementRef, ViewChild, Input } from '@angular/core';


@Component({
  selector: 'app-First-Nav',
  templateUrl: './First-Nav.component.html',
  styleUrls: ['./First-Nav.component.scss']
})

export class FirstNavComponent implements OnInit {
  @Input() navOpen: Function;

  sticky = false;

  refresh(): void {
    window.location.reload();
}


  
  
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
