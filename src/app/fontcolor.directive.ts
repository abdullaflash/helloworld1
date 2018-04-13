import { Directive, ElementRef, Renderer } from '@angular/core';

@Directive({
  //selector: '[appFontcolor]'
  selector: '.appFontcolor'
 
})
export class FontcolorDirective {
  constructor(elem: ElementRef, renderer: Renderer) {
     renderer.setElementStyle(elem.nativeElement, 'color', '#EEBA33');
  }

}
