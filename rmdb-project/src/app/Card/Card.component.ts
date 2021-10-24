import { Component, OnInit ,Input} from '@angular/core';
import {Movie} from '../Movie'
@Component({
  selector: 'app-Card',
  templateUrl: './Card.component.html',
  styleUrls: ['./Card.component.css']
})
export class CardComponent implements OnInit {

  
@Input() MoviePopUp: Function;
@Input() movies:Movie[]
@Input() action:Movie;
@Input() drama:Movie;
@Input()  family:Movie;
@Input()  comedy:Movie;
@Input()  crime:Movie;
@Input()  loggedin:boolean ;

  constructor() { }

  ngOnInit() {
  }


}
