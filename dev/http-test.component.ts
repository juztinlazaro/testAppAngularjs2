import { Component } from 'angular2/core';
import { HTTPTestService } from './services/http-test.service';

@Component({
  selector: 'http-test',
  template: `
    <button (click)="onTestGet()"> 
      Test GET Request 
    </button> <br>
    <p> Output: {{getData}} </p>
    <button (click)="onTestPost('test', 2)"> Test Post Request </button> <br>
    <p> Output: {{postData}} </p>
  `,
  providers: [
    HTTPTestService
  ]
})

export class HTTPTestComponent {
  //property for responce
  getData: string;
  postData: string;

  constructor(
    private _httpService: HTTPTestService
  ){}

  onTestGet() {
    this._httpService.getCurrentTime()
      .subscribe(
        data => this.getData = JSON.stringify(data),
        error => alert(error),
        () => console.log("Finished")
      );
  }

  onTestPost(val1, val2) {
    this._httpService.postJSON(val1, val2)
      .subscribe(
        data => this.postData = JSON.stringify(data),
        error => alert(error),
        () => console.log("Finished")
      );
  }
}