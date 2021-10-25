import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {User} from './User'

 
@Injectable({
  providedIn: 'root'
})
export class AuthService {

constructor(private http: HttpClient) { }

signUp(email:string, password:string , username:string ) {
  return this.http.post<User>('http://localhost:3000/signup', {email, username, password})
      // this is just the HTTP call, 
      // we still need to handle the reception of the token
}

signIn(email:string, password:string ){
  return this.http.post<User>('http://localhost:3000/signin', {email,  password})
}

check(email:string){
  return this.http.get<User>(`http://localhost:3000/user/:${email}`)
}

addToList(email:string,c:any){
  return this.http.put<User>(`http://localhost:3000/user/addToWatch/${email}`,c)
}

}
