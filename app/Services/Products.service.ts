import { Injectable } from 'angular2/core';
import { Http, Response, Headers } from 'angular2/http';
import { Observable } from 'rxjs/Rx';

export class ProductsData {
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
export class ProductsService {
    baseUrl: string;
    products: Array<ProductsData>;
    

    constructor(private _http: Http) {
        
    }

    getProducts() {
        return [
            new ProductsData(1, 'Coffee'),
            new ProductsData(2, 'Tea')
        ];
    }

    getAll() : Observable<ProductsData[]> {
        let prds = this._http
            .get(`http://northwindapi.codebhagat.com/api/Region`, {headers: this.getHeaders()})
            .map(mapProducts);
        return prds;
            /*.map( (response: Response) => { 
                let products = <ProductsData[]> response.json().data;
                return products;
            })
            .do(data => console.log(data))
            .catch(this.handleError);
            /*.map((products: Array<any>) => {
                let result:Array<ProductsData> = [];
                if (products) {
                    products.forEach((product) => {
                        result.push(new ProductsData(product.ProductID, product.ProductName, product.UnitPrice));
                    });
                }
                return result;
            })*/
    }
    
  getHeaders(){
    let headers = new Headers();
    headers.append('Accept', 'application/json');
    //headers.append('Access-Control-Allow-Headers', 'Content-Type');
    //headers.append('Access-Control-Allow-Methods', 'GET');
    //headers.append('Access-Control-Allow-Origin', '*');
    return headers;
  }
}
    function mapProducts(response:Response): ProductsData[] {
        // The response of the API has a results
        // property with the actual results
        return response.json().results.map(toProduct);
    }

    function toProduct(r:any): ProductsData{
        let product = <ProductsData>({
            RegionID: r.RegionID,
            RegionDescription: r.RegionDescription
        });
        console.log('Parsed region:', product);
        return product;
    }
/*
    private extractData(res: Response) {
        let body = res.json();
        return body.data || { };
    }

    private handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error.')
    }
    
    private handleError1 (error: any) {
    // In a real world app, we might use a remote logging infrastructure
    // We'd also dig deeper into the error to get a better message
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg); // log to console instead
    return Observable.throw(errMsg);
  */
