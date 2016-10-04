import { Component, EventEmitter, Input, Output, OnInit } from 'angular2/core';
import { Observable } from 'rxjs/Rx';
import { Router } from 'angular2/router';
import { HTTP_PROVIDERS } from 'angular2/http';
import { RegionData, RegionService } from '../Services/Region.service';

@Component({
  selector: 'my-region',
  templateUrl: 'app/Views/Region.html' , 
  providers: [HTTP_PROVIDERS, RegionService]
})

export class RegionComponent implements OnInit {
  //@Output() changed = new EventEmitter<ProductsData>();
  //@Input() productId: number;
  regions: Observable<RegionData[]>;
  messages: string[] = [];
  errorMessage: string;
  message: string;
  
  constructor(private _router: Router, private regionService: RegionService) {
      
  }

  ngOnInit() {
    this.message = "This is test!!!!";
    this.regionService.getAll();
    this.regions = this.regionService.regions;
    //this.products = this.productsService.getAll();
  }

/*
  getRegions() : Observable<RegionData[]> {
     return this.regionService.getAll();
    
  }
*/

  log(msg: string) {
    this.messages.splice(0, 0, msg);
    console.log(msg);
  }

}
