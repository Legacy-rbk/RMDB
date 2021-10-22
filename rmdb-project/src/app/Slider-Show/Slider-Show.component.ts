import { Component, OnInit } from '@angular/core';
import {DataService} from '../data.service'
import { Subscription } from 'rxjs';
import {Movie} from '../Movie'
@Component({
  selector: 'app-Slider-Show',
  templateUrl: './Slider-Show.component.html',
  styleUrls: ['./Slider-Show.component.css'],
})
export class SliderShowComponent {
  getSliders:Subscription[]=[]
  sliders:Movie


  constructor( private  movie:DataService) { 
   
  }

  ngOnInit():void {
    this.getSliders.push(this.movie.getconfig1().subscribe(data=>this.sliders=data))
  }

}
