import { ControlsComponent } from './controls.component';
import { Component } from '@angular/core';
import { EventEmitter } from 'protractor';

describe('ControlsComponent', () => {
  let component: ControlsComponent;
  let toggleWordsList: EventEmitter;

  beforeEach(() => {
    component = new ControlsComponent();  
    toggleWordsList = new EventEmitter();
  });

  xit('When value <= 768 then shoul be return false', () => {
    spyOn(window, 'innerWidth').and.returnValue(500);

    component.ngOnInit();
    
    expect(component.isShowContent).toBeFalsy();
  });

  it('Return true if checkbox checked', () => {
    let event = {
      target: {
        checked: true
      }
    };
    component.toggleList(event);
    
    expect(component.toggleWordsList).toBeTruthy();
  })
})