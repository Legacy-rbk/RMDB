import { Component, OnInit ,Input} from '@angular/core';
import {Movie} from '../Movie'
import {User} from '../User'
import { AuthService } from '../auth.service'
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-Card',
  templateUrl: './Card.component.html',
  styleUrls: ['./Card.component.css']
})
export class CardComponent implements OnInit {
  com: Subscription[] = [];
  
@Input() MoviePopUp: Function;
@Input() movies:Movie[]
@Input() action:Movie;
@Input() drama:Movie;
@Input()  family:Movie;
@Input()  comedy:Movie;
@Input()  crime:Movie;
@Input()  loggedin:boolean ;
@Input()  user:User;

  constructor(private auth : AuthService) { }

onAdd(obj:Movie){
  this.com.push(this.auth.addToList(this.user[0].email , obj).subscribe((res)=>console.log(res)))
}

  ngOnInit() {
  }


}
