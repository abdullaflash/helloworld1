import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor() { }

 
  /*timeString : string;
  // duration = 10*60;
  duration = 5;
  seconds = "--";
  minutes = "--";   
  clockDisplay : string; 
interval: number;
 ngOnInit() { 
      console.log(this.minutes + " : " + this.seconds);
      console.log(this.clockDisplay)
      this.tickTick();
  }
  tickTick(){
      if(this.duration > 0){
       setInterval( () => {this.duration = this.duration - 1;
  if(this.duration <=0 ){
      clearInterval(this.interval)	
      }

  if(this.duration % 60 < 10){
      this.seconds = "0"+this.duration%60;
  }else{
      this.seconds = (this.duration%60).toString();
  }

  if(this.duration / 60 < 10 ){
      this.minutes = "0"+parseInt(""+this.duration/60,10);
  }else{
      this.minutes = ""+parseInt((this.duration / 60).toString(),10);
  }

  this.clockDisplay = this.minutes + " : " +this.seconds; },1000); 
  }
}*/
}
