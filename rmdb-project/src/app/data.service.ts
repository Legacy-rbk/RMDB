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
constructor(private http: HttpClient) {
  
 }

}

