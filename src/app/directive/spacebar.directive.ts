import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[spacebar]'
})
export class SpacebarDirective {

  constructor(private element: ElementRef) {
    element.nativeElement.style.color = 'red';
   }

   @HostListener('keypress') onPressEnter() {
     console.log('press enter');
   }

}
