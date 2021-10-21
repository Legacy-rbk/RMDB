import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstNavComponent } from './First-Nav/First-Nav.component';
import { SliderShowComponent } from './Slider-Show/Slider-Show.component';
import { AuthPopupComponent } from './auth-popup/auth-popup.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatDialogModule ,MAT_DIALOG_DEFAULT_OPTIONS} from '@angular/material/dialog';


import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {NgbPaginationModule, NgbAlertModule} from '@ng-bootstrap/ng-bootstrap';

// import { NgbdCarouselConfig } from './carousel-config';
import { CardComponent } from './Card/Card.component';
@NgModule({
  declarations: [				
    AppComponent,
      FirstNavComponent,
      SliderShowComponent,
      AuthPopupComponent,
      CardComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatDialogModule,
    NgbModule,
    NgbPaginationModule,
    NgbAlertModule
  ],
  providers: [{provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: {hasBackdrop: false}}],
  bootstrap: [AppComponent]
 
})
export class AppModule { }
