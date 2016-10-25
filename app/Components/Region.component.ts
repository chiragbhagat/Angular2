import { Component, EventEmitter, Input, Output, OnInit } from 'angular2/core';
import { Observable } from 'rxjs/Rx';
import { Router } from 'angular2/router';
import { HTTP_PROVIDERS } from 'angular2/http';
import { RegionData, RegionService } from '../Services/Region.service';
import {ROUTER_DIRECTIVES} from 'angular2/router';

@Component({
  selector: 'my-region',
  templateUrl: 'app/Views/Region.html' , 
  directives: [ROUTER_DIRECTIVES],
  providers: [HTTP_PROVIDERS, RegionService]
})

export class RegionComponent implements OnInit {
  //@Output() changed = new EventEmitter<ProductsData>();
  //@Input() productId: number;
  regions: RegionData[];
  newRegion: RegionData;
  selectedRegion: RegionData;
  messages: string[] = [];
  errorMessage: string;
  message: string;
  showAdd: boolean;

  constructor(private _router: Router, private regionService: RegionService) {
    this.newRegion = new RegionData(0, "");
  }

  ngOnInit() {
      this.message = "This is test!!!!";
      this.regionService.getAll().subscribe(record => this.regions=record);
      this.regionService.getByID(1).subscribe(record => this.selectedRegion=record);

  }

  public getRegions() {
     this.regionService.getAll().subscribe(record => this.regions=record);
  }

  addRegion() {
    this.regionService.addRegionData(this.newRegion).subscribe(record => console.log(record));
    this.hideAddRegion();
    this.getRegions();
  }
  
  updateRegion() {
    this.regionService.updateRegionData(this.selectedRegion).subscribe(record => console.log(record));
    this.getRegions();
  }

  deleteRegion(id: number) {
    window.confirm("Are you sure you want to delete this region.") 
    {
        this.regionService.deleteRegion(id).subscribe(record => this.getRegions());
    }
  }

  SelectRegion(item: RegionData) {
      this.selectedRegion = item;
  }

  showAddRegion()
  {
    this.showAdd = true;
  }

  hideAddRegion()
  {
    this.showAdd = false;
  }

  submitForm(data: Object) {
    console.log(data);
  }

  log(msg: string) {
    this.messages.splice(0, 0, msg);
    console.log(msg);
  }

}
