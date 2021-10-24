/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { MoviesPopUpComponent } from './MoviesPopUp.component';



describe('MoviesPopUpComponent', () => {

  let component: MoviesPopUpComponent;
  let fixture: ComponentFixture<MoviesPopUpComponent>;



  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoviesPopUpComponent ]
    })
    .compileComponents();
  }));

 
  


  beforeEach(() => {
    fixture = TestBed.createComponent(MoviesPopUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });


  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

