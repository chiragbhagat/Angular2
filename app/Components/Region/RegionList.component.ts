import { Component, EventEmitter, Input, Output, OnInit } from 'angular2/core';
import { Observable } from 'rxjs/Rx';
import { Router } from 'angular2/router';
import { HTTP_PROVIDERS } from 'angular2/http';
import { RegionData, RegionService } from '../../Services/Region.service';
import {ROUTER_DIRECTIVES} from 'angular2/router';

@Component({
  selector: 'my-Region',
  templateUrl: 'app/Views/Region/RegionList.html' , 
  directives: [ROUTER_DIRECTIVES],
  providers: [HTTP_PROVIDERS, RegionService]
})

export class RegionListComponent implements OnInit {
  RegionList: RegionData[];
  newRegion: RegionData;
  selectedRegion: RegionData;
  messages: string[] = [];
  errorMessage: string;
  message: string;
  showAdd: boolean;

  constructor(private _router: Router, private RegionService: RegionService) {
    this.newRegion = new RegionData(0, "");
  }

  ngOnInit() {
      this.RegionService.getAll().subscribe(record => this.RegionList=record);
      //this.RegionService.getByID(1).subscribe(record => this.selectedRegion=record);

  }

  public getRegion() {
     this.RegionService.getAll().subscribe(record => this.RegionList=record);
  }

  addRegion() {
    this.RegionService.addRegionData(this.newRegion).subscribe(record => console.log(record));
    this.getRegion();
  }
  
  updateRegion() {
    this.RegionService.updateRegionData(this.selectedRegion).subscribe(record => console.log(record));
    this.getRegion();
  }

  deleteRegion(id: number) {
    if (window.confirm("Are you sure you want to delete this Region?") == true) 
    {
        this.RegionService.deleteRegion(id).subscribe(record => this.getRegion());
    }
  }

  SelectRegion(item: RegionData) {
      this.selectedRegion = item;
  }

  submitForm(data: Object) {
    console.log(data);
  }

  log(msg: string) {
    this.messages.splice(0, 0, msg);
    console.log(msg);
  }
}
	