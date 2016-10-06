import { Injectable } from 'angular2/core';
import { Http, Response, Headers, RequestOptions } from 'angular2/http';
import { Observable } from 'rxjs/Rx';
 
export class ProductsData {
    /*constructor(public id: number,
        public name: string,
        public price: number) {}*/
    public ProductID: number;
    public ProductName: string;
    public SupplierID: number;
    public CategoryID: number;
    public QuantityPerUnit: string;
    public UnitPrice: number;
    public UnitsInStock: number;
    public UnitsOnOrder: number;
    public ReorderLevel: number;
    public Discontinued: boolean;

    constructor(public productID: number,
        public productName: string) {
            this.ProductID = productID;
            this.ProductName = productName;
        }
}

@Injectable()
export class ProductsService {
    baseUrl: string;
    
    constructor(private _http: Http) {
        
    }

    getAll() : Observable<ProductsData[]> {
        return this._http
            .get('http://northwindapi.codebhagat.com/api/Products', {headers: this.getHeaders()})
            .map(response => response.json())
            .do(data => console.log(data))
            .catch(this.handleError);
    }

    getAllBy(filterExpression: string) : Observable<ProductsData[]> {
        return this._http
            .get('http://northwindapi.codebhagat.com/api/Products?filterExpression=${filterExpression}', {headers: this.getHeaders()})
            .map(response => response.json())
            .do(data => console.log(data))
            .catch(this.handleError);
    }

    getAllByPaging(filterExpression: string) : Observable<ProductsData[]> {
        return this._http
            .get('http://northwindapi.codebhagat.com/api/Products?filterExpression=&sortExpression=ProductID&pageIndex=1&pageSize=10', {headers: this.getHeaders()})
            .map(response => response.json())
            .do(data => console.log(data))
            .catch(this.handleError);
    }

    getByID(id: number) : Observable<ProductsData> {
        return this._http
            .get('http://northwindapi.codebhagat.com/api/Products/' + id, {headers: this.getHeaders()})
            .map(response => response.json())
            .do(data => console.log(data))
            .catch(this.handleError);
    }

    addProduct(productID: number, productName: string){
 
        let body = JSON.stringify({ "ProductID":productID,"ProductName":productName });
        let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
        let options = new RequestOptions({ headers: headers, method: "post" });
 
        return this._http.post('POST URL', body,options)
            .map(res => res.json())
            .catch(this.handleError);
    }

    addProductData(body:Object) {
        let bodyString = JSON.stringify(body); // Stringify payload 
        //let body = JSON.stringify({ "RegionID":regionID,"RegionDescription":regionDescription });
        let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
        let headers1 = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers1, method: "post" });
 
        return this._http.post('POST URL', bodyString, options)
            .map(res => res.json())
            .catch(this.handleError);
    }

    updateProductData(body:Object) {
        let bodyString = JSON.stringify(body); // Stringify payload 
        //let body = JSON.stringify({ "RegionID":regionID,"RegionDescription":regionDescription });
        let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
        let headers1 = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers1, method: "post" });
 
        return this._http.put('PUT URL', bodyString, options)
            .map(res => res.json())
            .catch(this.handleError);
    }

    deleteProduct(id:number) {
        //let bodyString = JSON.stringify(body); // Stringify payload 
        //let body = JSON.stringify({ "RegionID":regionID,"RegionDescription":regionDescription });
        let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
        let headers1 = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers1, method: "post" });
 
        return this._http.delete('http://northwindapi.codebhagat.com/api/Products/${id}')
            .map(res => res.json())
            .catch(this.handleError);
    }

    getProducts() {
        return [
            new ProductsData(1, 'Coffee'),
            new ProductsData(2, 'Tea')
        ];
    }

    getHeaders(){
        let headers = new Headers();
        headers.append('Accept', 'application/json');
        //headers.append('Access-Control-Allow-Headers', 'Content-Type');
        //headers.append('Access-Control-Allow-Methods', 'GET');
        //headers.append('Access-Control-Allow-Origin', '*');
        return headers;
    }

    handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error.');
    }


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

/*
    function mapProducts(response:Response): ProductsData[] {
        // The response of the API has a results
        // property with the actual results
        return response.json().map(toProduct);
    }

    function toProduct(r:any): ProductsData{
        let product = <ProductsData>({
            RegionID: r.RegionID,
            RegionDescription: r.RegionDescription
        });
        console.log('Parsed region:', product);
        return product;
    }
    */
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
