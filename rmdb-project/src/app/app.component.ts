import { Component , Output } from '@angular/core';
import { AuthPopupComponent } from './auth-popup/auth-popup.component';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {Movie} from './Movie'
import {DataService} from './data.service'
import { Subscription } from 'rxjs';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})




export class AppComponent {
  title = 'rmdb-project';
  moviesget:Subscription[]=[];
  movies:Movie;
 

 
  sliderConfig = {
    slidesToShow: 4,
    slidesToScroll: 2,
    arrows: true,
    autoplay: true
  };

  constructor(public dialog: MatDialog  , private  movie:DataService) { }
  openDialog(): void {
    const dialogRef = this.dialog.open(AuthPopupComponent, {
      width: '420px',
      height:'500px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  ngOnInit():void{
    this.moviesget.push(this.movie.getConfig().subscribe(data=>this.movies=data))
   
  }
}

