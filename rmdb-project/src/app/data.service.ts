import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import {Movie} from './Movie'

@Injectable({
  providedIn: 'root'
})


export class DataService {

  configUrl = 'http://localhost:3000/api/pop';
  
  getConfig() {
  return this.http.get<Movie>(this.configUrl);
}


configUrl1 =  'http://localhost:3000/api/slider';
getconfig1(){
  return this.http.get<Movie>(this.configUrl1)
}

constructor(private http: HttpClient) {
  
 }

}

