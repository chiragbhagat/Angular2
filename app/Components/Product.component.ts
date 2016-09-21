import { Component, OnInit } from 'angular2/core';
import { Router } from 'angular2/router';

@Component({
  selector: 'my-product',
  templateUrl: 'app/Views/Products.html' 
})
export class ProductComponent implements OnInit {

  constructor(
    private _router: Router) {
  }

  ngOnInit() {
  }

}
