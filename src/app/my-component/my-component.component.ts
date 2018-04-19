

import { Component } from '@angular/core';

@Component({
  selector: 'app-my-component',
  template: `<p class="optional"> my code</p>
       `,
       styles:[`.required{
        color: green;
        font-size: 30px;
    }
    .optional {
        color: red;
        background-color: cyan;
        font-family: cursive;
    } `]
})
export class MyComponentComponent {

  textValue = 'initial value';
  log = '';

  logText(value: string): void {
    this.log += `Text changed to '${value}'\n`;
  }
}