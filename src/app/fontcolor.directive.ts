import { Directive, ElementRef, Input, Output,EventEmitter} from '@angular/core';

/*@Directive({
 // selector: 'appFontcolor'
  //selector: '.appFontcolor'
  selector: '[appFontcolor]'
})
export class FontcolorDirective {
  constructor(el: ElementRef) {
    el.nativeElement.style.backgroundColor = 'yellow';
 }

}*/
@Directive({ 
  selector:'[color]',
  inputs: ['bgColor', 'color'] 
})
export class FontcolorDirective {
   
  constructor(private el: ElementRef) {
    this.el = el;
    
  }
   
  set color(color:string){
    this.el.nativeElement.style.color = color;
  }
   
  set bgColor(color:string){
    this.el.nativeElement.style.backgroundColor = color;
  }

}
/*@Directive({ 
  selector:'[color]',
  host: {
    '(mouseenter)': 'onMouseEnter($event.target)',
    '(mouseleave)': 'onMouseLeave($event.target)',
   
  }
})
export class FontcolorDirective {
  private defaultColor:string = 'blue';
  constructor(private el: ElementRef) {
    this.el = el;
    this.setColor(this.defaultColor);
  }
  onMouseEnter() {
    this.setColor('green');
  }
  onMouseLeave() {
    this.setColor(this.defaultColor);
  }
 
  private setColor(color: string) {
    this.el.nativeElement.style.color = color;
  }
}*/
