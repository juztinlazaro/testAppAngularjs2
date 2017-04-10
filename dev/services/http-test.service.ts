import { Injectable } from "angular2/core";
import { Http } from 'angular2/http';
import 'rxjs/add/operator/map';
import { Headers } from 'angular2/http';

@Injectable()

export class HTTPTestService {
  constructor (
    private _http: Http
  ){}

  getCurrentTime() {
    var url = 'http://date.jsontest.com';
    return this._http.get(url)
      .map(
        res => res.json() 
      );
  }

  postJSON(val1, val2) {
    var objData = JSON.stringify({
      var1: val1,
      var2: val2
    });
    var params = `json=${objData}`;
    var headers = new Headers();
    headers.append(
      'Content-Type',
      'application/x-www-form-urlencoded'
    );
    var url = `http://validate.jsontest.com`;
    
    //POST REQUEST
    return this._http.post(url, params, {
        headers: headers
    })
    .map(
      res => res.json()
    );
  }
}