import { Component } from 'angular2/core';
import { ProductService } from '../services/product.service';
import { OnInit } from 'angular2/core';

@Component({
  selector: 'product-continer',
  template: `
    product view
   <button (click)="fetchProducts()"> 
      Test GET Request 
    </button>

  <ul>
    <li *ngFor="#product of products">
      <h5>{{product.name | uppercase}}</h5>
      <div [innerHTML]="product.description"></div>
    </li>
  </ul>
  `,
  providers: [
    ProductService
  ]
})

export class ProductViewComponent implements OnInit {
  products: Object;

  constructor(
    private  _productService: ProductService
  ){}

  fetchProducts() {
    this._productService.getProducts()
    .subscribe(
        data => this.products = data.data,
        error => alert(error),
        () => console.log("Finished", this.products)
    );
    return this.products;
  }

  ngOnInit():any {
    this.fetchProducts();
  }
}