import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';




import { AppComponent } from './app.component';
import { MyComponentComponent } from './my-component/my-component.component';
import { FontcolorDirective } from './fontcolor.directive';
import { ReversecharPipe } from './reversechar.pipe';
import { DataService } from './data.service';
import { HttpServiceService } from './http-service.service';
import { HttpModule } from '@angular/http';

import { routing } from './app.route';
import { BirlasoftChennaiComponent } from './birlasoft-chennai/birlasoft-chennai.component';
import { BirlasoftNoidaComponent } from './birlasoft-noida/birlasoft-noida.component';
import { BranchOneComponent } from './birlasoft-chennai/branch-one/branch-one.component';
import { BranchTwoComponent } from './birlasoft-chennai/branch-two/branch-two.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { FontXDirective } from './font-x.directive';






@NgModule({
  declarations: [
    AppComponent,
    MyComponentComponent,
    FontcolorDirective,
    ReversecharPipe,
    BirlasoftChennaiComponent,
    BirlasoftNoidaComponent,
    BranchOneComponent,
    BranchTwoComponent,
    ParentComponent,
    ChildComponent,
    FontXDirective,
    
    
  ],
  imports: [BrowserModule, FormsModule,HttpModule,routing,ReactiveFormsModule],
  providers: [DataService,HttpServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
