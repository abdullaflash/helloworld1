import { Component, OnInit } from '@angular/core';

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

  
}
