import {NgModule,NO_ERRORS_SCHEMA,} from '@angular/core';

import {MatAutocompleteModule} from '@angular/material/autocomplete';

import {MatInputModule} from '@angular/material/input';


@NgModule({
  exports: [
    MatAutocompleteModule,
        MatInputModule,
  ],
  schemas: [
    NO_ERRORS_SCHEMA
  ]
})
export class searchModule {}