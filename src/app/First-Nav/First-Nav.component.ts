import { Component, OnInit, HostListener, ElementRef, ViewChild, Input } from '@angular/core';


@Component({
  selector: 'app-First-Nav',
  templateUrl: './First-Nav.component.html',
  styleUrls: ['./First-Nav.component.scss']
})

export class FirstNavComponent implements OnInit {
  @Input() logPopUp: Function;

  sticky = false;

  refresh(): void {
    window.location.reload();
}

toAction(){
  document.getElementById("action").scrollIntoView({behavior:"smooth"})
}
toDrama(){
  document.getElementById("drama").scrollIntoView({behavior:"smooth"})
}
toComedy(){
  document.getElementById("comedy").scrollIntoView({behavior:"smooth"})
}
toFamily(){
  document.getElementById("family").scrollIntoView({behavior:"smooth"})
}
toCrime(){
  document.getElementById("crime").scrollIntoView({behavior:"smooth"})
}
toWatch(){
  document.getElementById("watchlist").scrollIntoView({behavior:"smooth"})
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
