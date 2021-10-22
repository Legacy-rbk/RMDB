import { Component } from '@angular/core';
import { AuthPopupComponent } from './auth-popup/auth-popup.component';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Movie } from './Movie'
import { DataService } from './data.service'
import { AuthService } from './auth.service'
import { Subscription } from 'rxjs';
import { User } from './User';





@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})




export class AppComponent {
  title = 'rmdb-project';
  moviesget: Subscription[] = [];
  movies: Movie;
  user: User;
  loggedin: boolean = false;
  error: string;
  sliderConfig = {
    slidesToShow: 4,
    slidesToScroll: 2,
    arrows: true,
    autoplay: true
  };

  constructor(public dialog: MatDialog, private movie: DataService, private auth: AuthService) { }
  openDialog(): void {
    const dialogRef = this.dialog.open(AuthPopupComponent, {
      width: '420px',
      height: '500px',
      disableClose: true,
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.user = result
      if (this.user.username !== '' && this.user.email !== '' && this.user.password !== '') {
        this.auth.signUp(this.user.email, this.user.password, this.user.username).subscribe({
          next: data => { this.user = data; this.loggedin = true;console.log(data) },
          error: err => {this.error = err.error ; console.log(err.error)}
        })
      }
      else if (this.user.username == '' && this.user.email !== '' && this.user.password !== '') {
        this.auth.signIn(this.user.email, this.user.password).subscribe(
          {
            next: data => { this.user = data; this.loggedin = true; console.log(data)},
            error: err => {this.error = err.error ; console.log(err.error)}
          })



      }
      else {
        this.error = 'missing data'
      }


    });
  }

  ngOnInit(): void {
    this.moviesget.push(this.movie.getConfig().subscribe(data => this.movies = data))

  }
}

