import { Component, OnInit ,Input} from '@angular/core';
import {Movie} from '../Movie'

@Component({
  selector: 'app-Card',
  templateUrl: './Card.component.html',
  styleUrls: ['./Card.component.css']
})
export class CardComponent implements OnInit {

  sliderConfig = {
    slidesToShow: 4,
    slidesToScroll: 2,
    arrows: true,
    autoplay: true
  };

@Input() movies:Movie[]
  constructor() { }

  ngOnInit() {
  }

}
