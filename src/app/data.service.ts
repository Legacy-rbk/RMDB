import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Movie } from './Movie'

@Injectable({
  providedIn: 'root'
})


export class DataService {

  root='https://localhost:3000/'

  allmovies = `${this.root}api/pop`;
  getAll() {
    return this.http.get<Movie>(this.allmovies);
  }


  sliders = `${this.root}api/slider`;
  getSliders() {
    return this.http.get<Movie>(this.sliders)
  }




  Action = `${this.root}api/Action`;
  getAction() {
    return this.http.get<Movie>(this.Action);
  }
  Comedy = `${this.root}api/Comedy`;
  getComedy() {
    return this.http.get<Movie>(this.Comedy);
  }
  Drama = `${this.root}api/Drama`;
  getDrama() {
    return this.http.get<Movie>(this.Drama);
  }
  Family = `${this.root}api/Family`;
  getFamily() {
    return this.http.get<Movie>(this.Family);
  }
  Crime = `${this.root}api/Crime`;
  getCrime() {
    return this.http.get<Movie>(this.Crime);
  }





  addComment(u:string,c){
    return this.http.put<Movie>(u,c);
  }


  constructor(private http: HttpClient) { }

}

