import { Component, OnInit } from 'angular2/core';
import { Router } from 'angular2/router';
import { Http, Response, Headers } from 'angular2/http';
import { Observable } from 'rxjs/Rx';

@Component({
  selector: 'my-graph',
  templateUrl: 'app/Views/Graphs.html' 
})


class RegionData {
    public RegionID: number;
    public RegionDescription: string;
    constructor(public regionID: number,
        public regionDescription: string) {
            this.RegionID = regionID;
            this.RegionDescription = regionDescription;
        }
}

export class GraphComponent implements OnInit {
  public data: Object;
  public regions: Observable<RegionData[]>;

  constructor(
    public _router: Router,
    public http: Http) {

  }

  ngOnInit() {
    //this.getRequest();
  }

  makeRequest(): void {
    this.http.request(`http://northwindapi.codebhagat.com/api/Region`, {headers: this.getHeaders()})
    .subscribe((res: Response) => {
      this.data = res.json();
    });
    
  }

  getRequest(): void {
    this.http.request('http://northwindapi.codebhagat.com/api/Region', {headers: this.getHeaders()})
      //.subscribe( (res: Response) => res.json());
      .map((res:Response) => res.json())
      .subscribe(
        data => { this.regions = data},
        err => console.error(err),
        () => console.log('done')
      );
  }


private clone(object: any){
    // hack
    return JSON.parse(JSON.stringify(object));
  }

    getHeaders(){
    let headers = new Headers();
    headers.append('Accept', 'application/json');
    //headers.append('Access-Control-Allow-Headers', 'Content-Type');
    //headers.append('Access-Control-Allow-Methods', 'GET');
    //headers.append('Access-Control-Allow-Origin', '*');
    return headers;
  }
/*
  toRegion(r:any): Region{
        let region = <Region>({
            RegionID: r.RegionID,
            RegionDescription: r.RegionDescription
        });
        console.log('Parsed region:', region);
        return region;
    }
*/
}
