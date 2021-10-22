import { Component, OnInit , Input} from '@angular/core';
import {Movie} from '../Movie'

@Component({
  selector: 'app-Slider-Show',
  templateUrl: './Slider-Show.component.html',
  styleUrls: ['./Slider-Show.component.css'],
})
export class SliderShowComponent implements OnInit {
  
  @Input() movies:Movie[]
  constructor() { 
  }

  ngOnInit() {
  }

}
