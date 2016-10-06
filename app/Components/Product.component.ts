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
  products: ProductsData[];
  selectedProduct: ProductsData;
  messages: string[] = [];
  errorMessage: string;
  message: string;
  
  constructor(private _router: Router, private productsService: ProductsService) {
      
  }
 

  ngOnInit() {
    this.message = "This is test!!!!";
    //this.productsService.getAll().subscribe(record => this.products=record);
    this.getProducts();
  }

  getProducts() {
     this.productsService.getAll().subscribe(record => this.products=record);
  }
  
  getProductsBy() {
     this.productsService.getAllBy("CategoryID=1").subscribe(record => this.products=record);
  }

  getProductsByPaging() {
     this.productsService.getAllByPaging("CategoryID=1").subscribe(record => this.products=record);
  }

  getProductsByID() {
     this.productsService.getByID(1).subscribe(record => this.selectedProduct=record);
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
