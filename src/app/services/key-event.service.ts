import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/fromEvent';
import 'rxjs/add/operator/filter';

@Injectable()
export class KeyEventService {
  keyEvent$: Observable<any>;

  constructor() { 
    this.keyEvent$ = Observable.fromEvent(window, 'keydown');
  }

  public getEnterKeyListener() {
    return this.keyEvent$
      .filter(event => event.keyCode === 32);
  }

}
