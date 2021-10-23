import { Component, OnInit ,Input} from '@angular/core';
import {Movie} from '../Movie'
@Component({
  selector: 'app-Card',
  templateUrl: './Card.component.html',
  styleUrls: ['./Card.component.css']
})
export class CardComponent implements OnInit {

  

@Input() movies:Movie[]
  constructor() { }

  ngOnInit() {
  }


}
