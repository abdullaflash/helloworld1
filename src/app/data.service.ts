import { Injectable } from '@angular/core';

@Injectable()
export class DataService {
  constructor() { }
  BirlasoftBranches = [
    'Chennai','Noida','Hyderabad','Bangalore'
  ];
  myData() {
    return 'This is my serevice data!';
  }

}
