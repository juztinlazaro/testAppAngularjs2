import { Injectable } from 'angular2/core';
import { Http } from 'angular2/http';
import 'rxjs/add/operator/map';

@Injectable() 

export class ProductService {
  constructor(
    private _http: Http
  ){}

  getProducts() {
    var url = 'http://api.onesupershop.com/categories/1457/products';
    return this._http.get(url)
    .map(
      res => res.json() 
    );
  }
}