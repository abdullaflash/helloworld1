

import { Component } from '@angular/core';

@Component({
  selector: 'app-my-component',
  template: `
        <h1>Text ({{textValue}})</h1>
        <input #textbox type="text" [(ngModel)]="textValue" required>
        <button (click)="logText(textbox.value)">Update Log</button>
        <button (click)="textValue=''">Clear</button>
        <h2>Log <button (click)="log=''">Clear</button></h2>
        <pre>{{log}}</pre>`
})
export class MyComponentComponent {

  textValue = 'initial value';
  log = '';

  logText(value: string): void {
    this.log += `Text changed to '${value}'\n`;
  }
}