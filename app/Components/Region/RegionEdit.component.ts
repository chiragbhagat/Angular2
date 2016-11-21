import { Component, EventEmitter, Input, Output, OnInit } from 'angular2/core';
import { Observable } from 'rxjs/Rx';
import { Router, RouteParams } from 'angular2/router';
import { HTTP_PROVIDERS } from 'angular2/http';
import { RegionData, RegionService } from '../../Services/Region.service';
import {ROUTER_DIRECTIVES} from 'angular2/router';

@Component({
  selector: 'my-region-edit',
  templateUrl: 'app/Views/Region/RegionEdit.html' , 
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
    this.selectedRegion = new RegionData(0, "" );
  }

  ngOnInit() {
      this.message = "This is test!!!!";
      this.regionService.getByID(this.id).subscribe(record => this.selectedRegion=record);
      if (this.selectedRegion) {
        this.showEdit = true;
      }
  }
 
  updateRegion() {
    this.regionService.updateRegionData(this.selectedRegion)
      .subscribe(record => this._router.navigate(['Region']), 
                (err) => { console.log("ERROR: "+err); },
                () => { console.log("Region updated successfully..."); }
                );
  }

  deleteRegion(id: number) {
    if (window.confirm("Are you sure you want to delete this region.") == true) 
    {
        this.regionService.deleteRegion(id)
          .subscribe(record => this._router.navigate(['Region']),
                (err) => { console.log("ERROR: "+ err); },
                () => { console.log("Region deleted successfully..."); }
                );
    }
  }

  log(msg: string) {
    this.messages.splice(0, 0, msg);
    console.log(msg);
  }

}
