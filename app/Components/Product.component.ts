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
  @Output() changed = new EventEmitter<ProductsData>();
  @Input() productId: number;
  products: ProductsData[];
  selectedProduct: ProductsData;
  messages: string[] = [];
  errorMessage: string;
  message: string;
  jsonString: string;

  constructor(private _router: Router, private productsService: ProductsService) {
      this.products = this.productsService.getProducts();
      this.message = "This is test!!!"
  }

  ngOnInit() {
    this.products = this.productsService.getProducts();
  }


  getProducts() {
    this.products = this.productsService.getProducts();
    
  }

  select(selectedProduct: ProductsData) {
    this.selectedProduct = selectedProduct;
    this.changed.emit(selectedProduct);
  }

  clear() {
    this.selectedProduct = null;
  }

  log(msg: string) {
    this.messages.splice(0, 0, msg);
    console.log(msg);
  }

}
