import { Component, EventEmitter, Input, Output, OnInit } from 'angular2/core';
import { Observable } from 'rxjs/Rx';
import { Router, RouteParams, ROUTER_DIRECTIVES } from 'angular2/router';
import { HTTP_PROVIDERS } from 'angular2/http';
import { RegionData, RegionService } from '../Services/Region.service';

@Component({
  selector: 'my-region-edit',
  templateUrl: 'app/Views/RegionEdit.html' , 
  directives: [ROUTER_DIRECTIVES],
  providers: [HTTP_PROVIDERS, RegionService]
})

export class RegionEditComponent implements OnInit {
  //@Output() changed = new EventEmitter<ProductsData>();
  //@Input() regionId: number;
  selectedRegion: RegionData;
  messages: string[] = [];
  errorMessage: string;
  message: string;
  showEdit: boolean;
  id: number;


  constructor(private params: RouteParams, private _router: Router, private regionService: RegionService) {
	  this.id = parseInt(params.get('id'));
  }

  ngOnInit() {
      this.message = "This is test!!!!";
      this.regionService.getByID(this.id).subscribe(record => this.selectedRegion=record);
    if (this.selectedRegion) {
      this.showEdit = true;
    }
  }
 
  addRegion() {
    this.regionService.addRegionData(this.selectedRegion).subscribe(record => console.log(record));
  }
  
  
  updateRegion() {
    this.regionService.updateRegionData(this.selectedRegion).subscribe(record => console.log(record));
  }

  log(msg: string) {
    this.messages.splice(0, 0, msg);
    console.log(msg);
  }

}
