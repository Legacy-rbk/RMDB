import { Component, OnInit , Input } from '@angular/core';
import {DataService} from '../data.service'
import { Subscription } from 'rxjs';
import {Movie} from '../Movie';


@Component({
  selector: 'app-Slider-Show',
  templateUrl: './Slider-Show.component.html',
  styleUrls: ['./Slider-Show.component.css'],
})


export class SliderShowComponent {

getSliders:Subscription[]=[]
sliders:Movie
@Input() loggedin: boolean 
watchList(){
if(this.loggedin === false){
alert('you must login first !')
 }else
  alert('added to watchlist')
}

constructor( private  movie:DataService) { 
   
  }

  ngOnInit():void {
    this.getSliders.push(this.movie.getSliders().subscribe(data=>this.sliders=data))
  }

}
 