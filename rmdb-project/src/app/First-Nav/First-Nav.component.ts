import { Component, OnInit, HostListener,ElementRef, ViewChild } from '@angular/core';


@Component({
  selector: 'app-First-Nav',
  templateUrl: './First-Nav.component.html',
  styleUrls: ['./First-Nav.component.scss']
})

export class FirstNavComponent implements OnInit {
  sticky = false;
  refresh(): void {
    window.location.reload();
}


  constructor() { }

  ngOnInit() {
  }
  @ViewChild('stickHeader') header: ElementRef;
  @HostListener('window:scroll', ['$event'])
  handleScroll() {
    const windowScroll = window.pageYOffset;

    if (windowScroll >= this.header.nativeElement.offsetHeight) {
      this.sticky = true;
    } else {
      this.sticky = false;
    }
  }
}
