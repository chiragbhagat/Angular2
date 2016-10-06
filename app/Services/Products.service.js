System.register(['angular2/core', 'angular2/http', 'rxjs/Rx'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, http_1, Rx_1;
    var ProductsData, ProductsService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (Rx_1_1) {
                Rx_1 = Rx_1_1;
            }],
        execute: function() {
            ProductsData = (function () {
                function ProductsData(productID, productName) {
                    this.productID = productID;
                    this.productName = productName;
                    this.ProductID = productID;
                    this.ProductName = productName;
                }
                return ProductsData;
            }());
            exports_1("ProductsData", ProductsData);
            ProductsService = (function () {
                function ProductsService(_http) {
                    this._http = _http;
                }
                ProductsService.prototype.getAll = function () {
                    return this._http
                        .get('http://northwindapi.codebhagat.com/api/Products', { headers: this.getHeaders() })
                        .map(function (response) { return response.json(); })
                        .do(function (data) { return console.log(data); })
                        .catch(this.handleError);
                };
                ProductsService.prototype.getAllBy = function (filterExpression) {
                    return this._http
                        .get("http://northwindapi.codebhagat.com/api/Products?filterExpression=\"" + filterExpression + "\"", { headers: this.getHeaders() })
                        .map(function (response) { return response.json(); })
                        .do(function (data) { return console.log(data); })
                        .catch(this.handleError);
                };
                ProductsService.prototype.getAllByPaging = function (filterExpression) {
                    var url = "http://northwindapi.codebhagat.com/api/Products?filterExpression=" + filterExpression + "&sortExpression=ProductID&pageIndex=1&pageSize=10";
                    return this._http
                        .get(url, { headers: this.getHeaders() })
                        .map(function (response) { return response.json(); })
                        .do(function (data) { return console.log(data); })
                        .catch(this.handleError);
                };
                ProductsService.prototype.getByID = function (id) {
                    return this._http
                        .get('http://northwindapi.codebhagat.com/api/Products/' + id, { headers: this.getHeaders() })
                        .map(function (response) { return response.json(); })
                        .do(function (data) { return console.log(data); })
                        .catch(this.handleError);
                };
                ProductsService.prototype.addProduct = function (productID, productName) {
                    var body = JSON.stringify({ "ProductID": productID, "ProductName": productName });
                    var headers = new http_1.Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
                    var options = new http_1.RequestOptions({ headers: headers, method: "post" });
                    return this._http.post('POST URL', body, options)
                        .map(function (res) { return res.json(); })
                        .catch(this.handleError);
                };
                ProductsService.prototype.addProductData = function (body) {
                    var bodyString = JSON.stringify(body); // Stringify payload 
                    //let body = JSON.stringify({ "RegionID":regionID,"RegionDescription":regionDescription });
                    var headers = new http_1.Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
                    var headers1 = new http_1.Headers({ 'Content-Type': 'application/json' });
                    var options = new http_1.RequestOptions({ headers: headers1, method: "post" });
                    return this._http.post('POST URL', bodyString, options)
                        .map(function (res) { return res.json(); })
                        .catch(this.handleError);
                };
                ProductsService.prototype.updateProductData = function (body) {
                    var bodyString = JSON.stringify(body); // Stringify payload 
                    //let body = JSON.stringify({ "RegionID":regionID,"RegionDescription":regionDescription });
                    var headers = new http_1.Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
                    var headers1 = new http_1.Headers({ 'Content-Type': 'application/json' });
                    var options = new http_1.RequestOptions({ headers: headers1, method: "post" });
                    return this._http.put('PUT URL', bodyString, options)
                        .map(function (res) { return res.json(); })
                        .catch(this.handleError);
                };
                ProductsService.prototype.deleteProduct = function (id) {
                    //let bodyString = JSON.stringify(body); // Stringify payload 
                    //let body = JSON.stringify({ "RegionID":regionID,"RegionDescription":regionDescription });
                    var headers = new http_1.Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
                    var headers1 = new http_1.Headers({ 'Content-Type': 'application/json' });
                    var options = new http_1.RequestOptions({ headers: headers1, method: "post" });
                    return this._http.delete('http://northwindapi.codebhagat.com/api/Products/${id}')
                        .map(function (res) { return res.json(); })
                        .catch(this.handleError);
                };
                ProductsService.prototype.getProducts = function () {
                    return [
                        new ProductsData(1, 'Coffee'),
                        new ProductsData(2, 'Tea')
                    ];
                };
                ProductsService.prototype.getHeaders = function () {
                    var headers = new http_1.Headers();
                    headers.append('Accept', 'application/json');
                    //headers.append('Access-Control-Allow-Headers', 'Content-Type');
                    //headers.append('Access-Control-Allow-Methods', 'GET');
                    //headers.append('Access-Control-Allow-Origin', '*');
                    return headers;
                };
                ProductsService.prototype.handleError = function (error) {
                    console.error(error);
                    return Rx_1.Observable.throw(error.json().error || 'Server error.');
                };
                ProductsService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], ProductsService);
                return ProductsService;
            }());
            exports_1("ProductsService", ProductsService);
        }
    }
});
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
//# sourceMappingURL=Products.service.js.map