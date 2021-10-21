import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-First-Nav',
  templateUrl: './First-Nav.component.html',
  styleUrls: ['./First-Nav.component.scss']
})
export class FirstNavComponent implements OnInit {
  sticky = false;

  constructor() { }

  ngOnInit() {
  }

}
