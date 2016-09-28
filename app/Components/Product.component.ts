import { Component, EventEmitter, Input, Output, OnInit } from 'angular2/core';
import { Observable } from 'rxjs/Rx';
import { Router } from 'angular2/router';
import { HTTP_PROVIDERS } from 'angular2/http';
import { ProductsData, ProductsService } from '../Services/Products.service';

@Component({
  selector: 'my-product',
  templateUrl: 'app/Views/Products.html' , 
  providers: [HTTP_PROVIDERS, ProductsService]
})

export class ProductComponent implements OnInit {
  //@Output() changed = new EventEmitter<ProductsData>();
  //@Input() productId: number;
  products: ProductsData[] = [];
  selectedProduct: ProductsData;
  messages: string[] = [];
  errorMessage: string;
  message: string;

  constructor(private _router: Router, private productsService: ProductsService) {
      
  }


  ngOnInit() {
    this.message = "This is test!!!!";
    this.getProducts();
    //this.products = this.productsService.getAll();
  }


  getProducts() {
    this.productsService.getAll()
      .subscribe(
        data => this.products = data,
        error => console.log("Error HTTP GET Service"),
                () => console.log("Job Done Get !")
    );
  }
/*
  select(selectedProduct: ProductsData) {
    this.selectedProduct = selectedProduct;
    this.changed.emit(selectedProduct);
  }
*/
  clear() {
    this.selectedProduct = null;
  }

  log(msg: string) {
    this.messages.splice(0, 0, msg);
    console.log(msg);
  }

}
