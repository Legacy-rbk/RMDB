import { Component, OnInit, ViewEncapsulation , Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

import {User} from '../User'

@Component({
  selector: 'app-auth-popup',
  templateUrl: './auth-popup.component.html',
  styleUrls: ['./auth-popup.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AuthPopupComponent implements OnInit {

constructor(
  public dialogRef: MatDialogRef<AuthPopupComponent>,
  @Inject(MAT_DIALOG_DATA) public data: '') {}

  sign:Boolean=false;

  user: User = {
    email: '',
    username: '',
    password:''
  };

  switch():void{
    this.sign=!this.sign
  }
  
onNoClick(): void {
  this.dialogRef.close();
}
  ngOnInit() {
  }

}


