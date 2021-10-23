import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstNavComponent } from './First-Nav/First-Nav.component';
import { SliderShowComponent } from './Slider-Show/Slider-Show.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon';
import {MatBadgeModule} from '@angular/material/badge';
import { AuthPopupComponent } from './auth-popup/auth-popup.component';
import {MatDialogModule ,MAT_DIALOG_DEFAULT_OPTIONS} from '@angular/material/dialog';

import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {NgbPaginationModule, NgbAlertModule} from '@ng-bootstrap/ng-bootstrap';
import {SlickCarouselModule} from 'ngx-slick-carousel';
import { HttpClientModule } from '@angular/common/http';


import { SecondNavComponent } from './Second-Nav/Second-Nav.component';

// import { NgbdCarouselConfig } from './carousel-config';
import { CardComponent } from './Card/Card.component';
@NgModule({
  declarations: [				
    AppComponent,
      FirstNavComponent,
      SliderShowComponent,
      AuthPopupComponent,
      CardComponent,
      SecondNavComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatBadgeModule,
    MatDialogModule,
    NgbModule,
    NgbPaginationModule,
    NgbAlertModule,
    FormsModule,
    HttpClientModule,
    SlickCarouselModule
  ],
  providers: [{provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: {hasBackdrop: true}}],
  entryComponents: [
    AuthPopupComponent
  ],
  bootstrap: [AppComponent]
 
})
export class AppModule { }
