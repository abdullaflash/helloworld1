import { Component, OnInit,ViewChild } from '@angular/core';
import { ChildComponent } from "../child/child.component";

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent  {

  title : string;
 
  constructor(){
    this.title = 'Parent child communication';
  }
  sharedText:string
  shareDataToParent(sharedText:string){
    this.sharedText=sharedText
    
  }

  @ViewChild(ChildComponent) child: ChildComponent;

  increment() {
    this.child.increment();
  }

  decrement() {
    this.child.decrement();
  }
}
