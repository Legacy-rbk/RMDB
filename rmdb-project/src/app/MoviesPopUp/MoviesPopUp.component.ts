import { Component, OnInit,ViewEncapsulation, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA  } from '@angular/material/dialog';


@Component({
  selector: 'app-MoviesPopUp',
  templateUrl: './MoviesPopUp.component.html',
  styleUrls: ['./MoviesPopUp.component.css'],
  encapsulation: ViewEncapsulation.None
  
})
export class MoviesPopUpComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<MoviesPopUpComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
  }

}
