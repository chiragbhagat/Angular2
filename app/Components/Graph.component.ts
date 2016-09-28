import { Component, OnInit } from 'angular2/core';
import { Router } from 'angular2/router';
import { Http, Response, Headers } from 'angular2/http';

@Component({
  selector: 'my-graph',
  templateUrl: 'app/Views/Graphs.html' 
})



export class GraphComponent implements OnInit {
  data: Object;

  constructor(
    public _router: Router,
    public http: Http) {

  }

  ngOnInit() {
  }

  makeRequest(): void {
    this.http.request(`http://northwindapi.codebhagat.com/api/Region`, {headers: this.getHeaders()})
    .subscribe((res: Response) => {
      this.data = res.json();
    });
    
  }

    getHeaders(){
    let headers = new Headers();
    headers.append('Accept', 'application/json');
    //headers.append('Access-Control-Allow-Headers', 'Content-Type');
    //headers.append('Access-Control-Allow-Methods', 'GET');
    //headers.append('Access-Control-Allow-Origin', '*');
    return headers;
  }

  toRegion(r:any): Region{
        let region = <Region>({
            RegionID: r.RegionID,
            RegionDescription: r.RegionDescription
        });
        console.log('Parsed region:', region);
        return region;
    }

}
