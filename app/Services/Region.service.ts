import { Injectable } from 'angular2/core';
import { Http, Response, Headers, RequestOptions } from 'angular2/http';
import { Observable } from 'rxjs/Rx';
import myGlobals = require('../globals');

export class RegionData {
    /*constructor(public id: number,
        public name: string,
        public price: number) {}*/
    public RegionID: number;
    public RegionDescription: string;

    constructor(public regionID: number,
        public regionDescription: string) {
            this.RegionID = regionID;
            this.RegionDescription = regionDescription;
        }
}

@Injectable()
export class RegionService {
    baseUrl: string;

    constructor(private _http: Http) {
	    this.baseUrl = myGlobals.baseApiUrl;
    }

    getAll() : Observable<RegionData[]> {
        let url = this.baseUrl + 'api/Region';
		return this._http
			.get(url, { headers: this.getHeaders() })
			.map(response => response.json())
			.do(data => console.log(data))
			.catch(this.handleError);
		// http://localhost:37299/api/Region
		//     return this._http
   //         .get('http://northwindapi.codebhagat.com/api/Region', {headers: this.getHeaders()})
   //         .map(response => response.json())
   //         .do(data => console.log(data))
			//.catch(this.handleError);
    }

    getAllBy(filterExpression: string) : Observable<RegionData[]> {
        let url = this.baseUrl + 'api/Region?filterExpression=${filterExpression}';
        return this._http
            .get(url, {headers: this.getHeaders()})
            .map(response => response.json())
            .do(data => console.log(data))
            .catch(this.handleError);
    }

    getAllByPaging(filterExpression: string) : Observable<RegionData[]> {
        let url = this.baseUrl + 'api/Region?filterExpression=&sortExpression=RegionID&pageIndex=1&pageSize=10';
        return this._http
            .get(url, {headers: this.getHeaders()})
            .map(response => response.json())
            .do(data => console.log(data))
            .catch(this.handleError);
    }

    getByID(id: number) : Observable<RegionData> {
        let url = `${this.baseUrl}api/Region/${id}`;
        return this._http
			.get(url, {headers: this.getHeaders()})
            .map(response => response.json())
            .do(data => console.log(data))
            .catch(this.handleError);
    }

    addRegion(regionID:number,regionDescription:string){
        let body = JSON.stringify({ "RegionID":regionID,"RegionDescription":regionDescription });
        let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
        let options = new RequestOptions({ headers: headers, method: "post" });
 
        return this._http.post('POST URL', body,options)
            .map(res => res.json())
            .do(data => console.log(data))
            .catch(this.handleError);
    }

    addRegionData(body:RegionData) : Observable<RegionData> {
        let bodyString = JSON.stringify(body); // Stringify payload 
        let options = new RequestOptions({ headers: this.getHeaders(), method: "post" });
        let url = this.baseUrl + 'api/Region';
 
        return this._http.post(url, bodyString, options)
            .map(res => res.json())
            .catch(this.handleError);
    }

    updateRegionData(body:RegionData) : Observable<RegionData> {
        let bodyString = JSON.stringify(body); // Stringify payload 
        let options = new RequestOptions({ headers: this.getHeaders(), method: "put" });
        let url = this.baseUrl + 'api/Region';

        return this._http.put(url, bodyString, options)
            .map(this.extractData)
            .catch(this.handleError);
    }

    deleteRegion(id:number) : Observable<Object>{
        let url = `${this.baseUrl}api/Region/${id}`;
 
        return this._http.delete(url)
            .map(res => res)
            .catch(this.handleError);
    }

    getHeaders(){
        let headers = new Headers();
        headers.append('Accept', 'application/json');
        headers.append('Content-Type', 'application/json');
        //headers.append('Access-Control-Allow-Headers', 'Content-Type');
        //headers.append('Access-Control-Allow-Methods', 'GET');
        //headers.append('Access-Control-Allow-Origin', '*');
        //let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
        return headers;
    }

    private extractData(res: Response) {
        let body: any;

        // check if empty, before call json
        if (res.text()) {
            body = res.json();
        }
        return body || { };
    }
    
    handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error.');
    }

    /*
    getRegions() {
        return [
            new RegionData(1, 'Coffee'),
            new RegionData(2, 'Tea')
        ];
    } */
}

    function mapRegions(response:Response): RegionData[] {
        // The response of the API has a results
        // property with the actual results
        return response.json().map(toRegion);
    }

    function toRegion(r:any): RegionData{
        let region = <RegionData>({
            RegionID: r.RegionID,
            RegionDescription: r.RegionDescription
        });
        console.log('Parsed region:', region);
        return region;
    }



/*
    

    
    private handleError1 (error: any) {
    // In a real world app, we might use a remote logging infrastructure
    // We'd also dig deeper into the error to get a better message
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg); // log to console instead
    return Observable.throw(errMsg);
  */
