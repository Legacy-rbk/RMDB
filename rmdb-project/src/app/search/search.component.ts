import {Component, OnInit,Input} from '@angular/core';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, debounceTime} from 'rxjs/operators';
import {Movie} from '../Movie'


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})

export class SearchComponent implements OnInit {
  @Input() movies:Movie[]

  myControl = new FormControl();
  options: string[] = [];
  filteredOptions: Observable<string[]>;
  ngOnInit() {
    this.options.map(el=>{this.options.push(el.title);})
    this.filteredOptions = this.myControl.valueChanges
      .pipe(        
        debounceTime(500),
        map(value => this._filter(value))
      );
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }
}