import { Component, EventEmitter, Input, Output, OnInit } from 'angular2/core';
import { Observable } from 'rxjs/Rx';
import { Router } from 'angular2/router';
import { HTTP_PROVIDERS } from 'angular2/http';
import { RegionData, RegionService } from '../../Services/Region.service';
import {ROUTER_DIRECTIVES} from 'angular2/router';

@Component({
  selector: 'my-region-add',
  templateUrl: 'app/Views/Region/RegionAdd.html' , 
  directives: [ROUTER_DIRECTIVES],
  providers: [HTTP_PROVIDERS, RegionService]
})

export class RegionAddComponent implements OnInit {
  //@Output() changed = new EventEmitter<ProductsData>();
  //@Input() productId: number;
  newRegion: RegionData;
  messages: string[] = [];
  errorMessage: string;
  message: string;
  showAdd: boolean;

  constructor(private _router: Router, private regionService: RegionService) {
    this.newRegion = new RegionData(0, "");
  }

  ngOnInit() {
      this.message = "This is test!!!!";
  }
 
  addRegion() {
    this.regionService.addRegionData(this.newRegion)
        .subscribe(record => this._router.navigate(['Region']), 
                (err) => { console.log("ERROR: " + err); },
                () => { console.log("Region added successfully..."); }
                );
  }
  
  /*
  updateRegion() {
    this.regionService.updateRegionData(this.selectedRegion).subscribe(record => console.log(record));
  }*/

  log(msg: string) {
    this.messages.splice(0, 0, msg);
    console.log(msg);
  }

}
