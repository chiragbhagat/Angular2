System.register(['angular2/core', 'angular2/http'], function(exports_1, context_1) {
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
    var core_1, http_1;
    var ProductsData, ProductsService;
    function mapProducts(response) {
        // The response of the API has a results
        // property with the actual results
        return response.json().results.map(toProduct);
    }
    function toProduct(r) {
        var product = ({
            RegionID: r.RegionID,
            RegionDescription: r.RegionDescription
        });
        console.log('Parsed region:', product);
        return product;
    }
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            }],
        execute: function() {
            ProductsData = (function () {
                function ProductsData(regionID, regionDescription) {
                    this.regionID = regionID;
                    this.regionDescription = regionDescription;
                    this.RegionID = regionID;
                    this.RegionDescription = regionDescription;
                }
                return ProductsData;
            }());
            exports_1("ProductsData", ProductsData);
            ProductsService = (function () {
                function ProductsService(_http) {
                    this._http = _http;
                }
                ProductsService.prototype.getProducts = function () {
                    return [
                        new ProductsData(1, 'Coffee'),
                        new ProductsData(2, 'Tea')
                    ];
                };
                ProductsService.prototype.getAll = function () {
                    var prds = this._http
                        .get("http://northwindapi.codebhagat.com/api/Region", { headers: this.getHeaders() })
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
                };
                ProductsService.prototype.getHeaders = function () {
                    var headers = new http_1.Headers();
                    headers.append('Accept', 'application/json');
                    //headers.append('Access-Control-Allow-Headers', 'Content-Type');
                    //headers.append('Access-Control-Allow-Methods', 'GET');
                    //headers.append('Access-Control-Allow-Origin', '*');
                    return headers;
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