import { Component } from '@angular/core';
import { AuthPopupComponent } from './auth-popup/auth-popup.component';
import { MoviesPopUpComponent } from './MoviesPopUp/MoviesPopUp.component';
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
  action: Movie;
  drama: Movie;
  family: Movie;
  comedy: Movie;
  crime: Movie;
  moviepop: Movie = null;
  user: User;
  loggedin: boolean = false;
  error: string;
  toWatchList : any[] ;

  sliderConfig = {
    slidesToShow: 4,
    slidesToScroll: 2,
    arrows: true,
    autoplay: true
  };


  SignIn = (user: User) => {
    console.log(user)
    if (user.email !== '' && user.password !== '') {
      this.auth.signIn(user.email, user.password).subscribe(
        {
          next: data => {
            this.user = data;
            this.loggedin = true;
            this.error = '';
            localStorage.email = user.email;
          },
          error: err => { this.error = err.error; console.log(err.error) }
        })
    }
    else { this.error = 'missing fileds' }
  }


  SignUp = (user: User) => {
    console.log(user)
    if (user.username !== '' && user.email !== '' && user.password !== '') {
      this.auth.signUp(user.email, user.password, user.username).subscribe({
        next: data => {
          this.user = data;
          this.loggedin = true;
          this.error = '';
          localStorage.email = user.email;
        },
        error: err => { this.error = err.error; console.log(err.error) }
      })
    }
    else { this.error = 'missing fileds' }
  }

  SignOut = () => {
    this.user = null;
    this.loggedin = false
    localStorage.clear()
  }


  constructor(public dialog: MatDialog, private movie: DataService, private auth: AuthService) { }
  logPopUp(): void {
    const dialogRef = this.dialog.open(AuthPopupComponent, {
      width: '420px',
      height: '500px',
      disableClose: false,
      data: { signin: this.SignIn, signup: this.SignUp },
      panelClass: 'custom-modalbox1'
    });


    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed')
    });
  }

  MoviePopUp(moviepop): void {
    const dialogRef1 = this.dialog.open(MoviesPopUpComponent, {
      width: '1300px',
      height: '900px',
      disableClose: false,
      panelClass: 'custom-modalbox',
      data: { movie: moviepop, user: this.user, loggedin: this.loggedin }

    });


    dialogRef1.afterClosed().subscribe(result => {
      console.log('The dialog was closed')
    });

  }



  ngOnInit(): void {
    if(localStorage.email){
      this.auth.check(localStorage.email).subscribe(data=>{this.user = data ; this.loggedin = true})
      this.moviesget.push(this.movie.getAll().subscribe(data => this.movies = data))
      this.moviesget.push(this.movie.getAction().subscribe(data => this.action = data))
      this.moviesget.push(this.movie.getComedy().subscribe(data => this.comedy = data))
      this.moviesget.push(this.movie.getCrime().subscribe(data => this.crime = data))
      this.moviesget.push(this.movie.getFamily().subscribe(data => this.family = data))
      this.moviesget.push(this.movie.getDrama().subscribe(data => this.drama = data))

    }
    
    this.moviesget.push(this.movie.getAll().subscribe(data => this.movies = data))
    this.moviesget.push(this.movie.getAction().subscribe(data => this.action = data))
    this.moviesget.push(this.movie.getComedy().subscribe(data => this.comedy = data))
    this.moviesget.push(this.movie.getCrime().subscribe(data => this.crime = data))
    this.moviesget.push(this.movie.getFamily().subscribe(data => this.family = data))
    this.moviesget.push(this.movie.getDrama().subscribe(data => this.drama = data))

  }


}

