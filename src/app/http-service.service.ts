import { Injectable } from '@angular/core';
import { Http } from '@angular/http';



@Injectable()
export class HttpServiceService {

  constructor(private _http:Http) { 

  }
  public getData()
  {
    let _url:string="http://jsonplaceholder.typicode.com/users"
    return this._http.get(_url)
   
  }
  
 /* public postData()
  {
  this._http.post('http://jsonplaceholder.typicode.com/posts', {
      title: 'foo',
      body: 'bar',
      userId: 1
    })
      .subscribe(
        res => {
          console.log(res);
        },
        err => {
          console.log("Error occured");
        }
      );
    }*/
    

}
