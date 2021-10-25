import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {User} from './User'

 
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  root='https://rmdb-6xnl1hv4r-rmdb.vercel.app/'

constructor(private http: HttpClient) { }

signUp(email:string, password:string , username:string ) {
  return this.http.post<User>(`${this.root}signup`, {email, username, password})
      // this is just the HTTP call, 
      // we still need to handle the reception of the token
}

signIn(email:string, password:string ){
  return this.http.post<User>(`${this.root}signin`, {email,  password})
}

check(email:string){
  return this.http.get<User>(`${this.root}user/:${email}`)
}

addToList(email:string,c:any){
  return this.http.put<User>(`${this.root}user/addToWatch/${email}`,c)
}

}


