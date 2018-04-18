import { Component,Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'child-component',
  template: `
  <div>
      <span>Child Component: </span>
      <span>{{name}}</span><br>
      <button (click)="shareData()">Share data to parent</button>

    </div>
  `
})
export class ChildComponent {
 
  @Input() name: string;
  @Output() shareDataToParent = new EventEmitter();
  
  title : string;
  constructor(){
      this.title = 'Sharing from child to parent';
  }
  
  shareData(){
      this.shareDataToParent.emit(this.title);
  }

  count = 0;

     increment() {
        this.count++;
      }
    decrement() {
        this.count--;
    }
}