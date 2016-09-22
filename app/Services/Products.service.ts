import { Injectable } from 'angular2/core';
import { Http, Response } from 'angular2/http';
import { Observable } from 'rxjs/Rx';

export class ProductsData {
    constructor(public id: number,
        public name: string,
        public price: number) {}
        
}

@Injectable()
export class ProductsService {
    private baseUrl: string;
    private products: ProductsData[];

    constructor(private _http: Http) {
        this.baseUrl = "http://northwindapi.codebhagat.com/api/";
    }

    getProducts() {
        return [
            new ProductsData(1, 'Coffee', 2),
            new ProductsData(1, 'Tea', 1)
        ];
    }

    getAll() {
        this._http.get(`${this.baseUrl}/Products`)
            .map( (response: Response) => response.json()).subscribe(data => {
                this.products = data;
            }, error => console.log('Could not load products.'));
        return this.products;
    }
    
    private handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error.')
    }
    
}