import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Movie } from './Movie'

@Injectable({
  providedIn: 'root'
})


export class DataService {

  allmovies = 'http://localhost:3000/api/pop';
  getAll() {
    return this.http.get<Movie>(this.allmovies);
  }


  sliders = 'http://localhost:3000/api/slider';
  getSliders() {
    return this.http.get<Movie>(this.sliders)
  }




  Action = 'http://localhost:3000/api/Action';
  getAction() {
    return this.http.get<Movie>(this.Action);
  }
  Comedy = 'http://localhost:3000/api/Comedy';
  getComedy() {
    return this.http.get<Movie>(this.Comedy);
  }
  Drama = 'http://localhost:3000/api/Drama';
  getDrama() {
    return this.http.get<Movie>(this.Drama);
  }
  Family = 'http://localhost:3000/api/Family';
  getFamily() {
    return this.http.get<Movie>(this.Family);
  }
  Crime = 'http://localhost:3000/api/Crime';
  getCrime() {
    return this.http.get<Movie>(this.Crime);
  }





  addComment(u:string,c){
    return this.http.put<Movie>(u,c);
  }


  constructor(private http: HttpClient) { }

}

