/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SliderShowComponent } from './Slider-Show.component';

describe('SliderShowComponent', () => {
  let component: SliderShowComponent;
  let fixture: ComponentFixture<SliderShowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SliderShowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SliderShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
