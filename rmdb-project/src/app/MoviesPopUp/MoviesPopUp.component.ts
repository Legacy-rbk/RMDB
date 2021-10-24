import { Component, OnInit, ViewEncapsulation, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { DataService } from '../data.service'
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-MoviesPopUp',
  templateUrl: './MoviesPopUp.component.html',
  styleUrls: ['./MoviesPopUp.component.css'],
  encapsulation: ViewEncapsulation.None

})
export class MoviesPopUpComponent implements OnInit {

  com: Subscription[] = [];

  constructor(private movie: DataService,
    public sanitizer: DomSanitizer,
    public dialogRef: MatDialogRef<MoviesPopUpComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  url: string = `https://www.youtube.com/embed/${this.data.movie.youtube_trailer_key}`
  urlSafe: SafeResourceUrl;
  comment: string

  putUrl:string = `http://localhost:3000/api/popular/${this.data.movie._id}`

  addcomment() {
    if(this.data.loggedin){
      this.com.push(this.movie.addComment(this.putUrl,{comment : this.comment , user : this.data.user[0].username}).subscribe(data => console.log(data)))
    }
    else{
      console.log("must login before commenting")
    }
  
  } 


  ngOnInit() {
    this.urlSafe = this.sanitizer.bypassSecurityTrustResourceUrl(this.url);

  }
}
