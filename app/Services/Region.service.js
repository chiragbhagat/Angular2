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
    var RegionData, RegionService;
    function mapRegions(response) {
        // The response of the API has a results
        // property with the actual results
        return response.json().map(toRegion);
    }
    function toRegion(r) {
        var region = ({
            RegionID: r.RegionID,
            RegionDescription: r.RegionDescription
        });
        console.log('Parsed region:', region);
        return region;
    }
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
            RegionData = (function () {
                function RegionData(regionID, regionDescription) {
                    this.regionID = regionID;
                    this.regionDescription = regionDescription;
                    this.RegionID = regionID;
                    this.RegionDescription = regionDescription;
                }
                return RegionData;
            }());
            exports_1("RegionData", RegionData);
            RegionService = (function () {
                function RegionService(_http) {
                    this._http = _http;
                }
                RegionService.prototype.getRegions = function () {
                    return [
                        new RegionData(1, 'Coffee'),
                        new RegionData(2, 'Tea')
                    ];
                };
                RegionService.prototype.getAll = function () {
                    return this._http
                        .get('http://northwindapi.codebhagat.com/api/Region', { headers: this.getHeaders() })
                        .map(function (response) { return response.json(); })
                        .do(function (data) { return console.log(data); })
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
                RegionService.prototype.getByID = function (id) {
                    return this._http
                        .get('http://northwindapi.codebhagat.com/api/Region/' + id, { headers: this.getHeaders() })
                        .map(function (response) { return response.json(); })
                        .do(function (data) { return console.log(data); })
                        .catch(this.handleError);
                };
                RegionService.prototype.addRegion = function (regionID, regionDescription) {
                    var body = JSON.stringify({ "RegionID": regionID, "RegionDescription": regionDescription });
                    var headers = new http_1.Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
                    var options = new http_1.RequestOptions({ headers: headers, method: "post" });
                    return this._http.post('POST URL', body, options)
                        .map(function (res) { return res.json(); })
                        .catch(this.handleError);
                };
                RegionService.prototype.addRegionData = function (body) {
                    var bodyString = JSON.stringify(body); // Stringify payload 
                    //let body = JSON.stringify({ "RegionID":regionID,"RegionDescription":regionDescription });
                    var headers = new http_1.Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
                    var headers1 = new http_1.Headers({ 'Content-Type': 'application/json' });
                    var options = new http_1.RequestOptions({ headers: headers1, method: "post" });
                    return this._http.post('POST URL', bodyString, options)
                        .map(function (res) { return res.json(); })
                        .catch(this.handleError);
                };
                RegionService.prototype.updateRegionData = function (body) {
                    var bodyString = JSON.stringify(body); // Stringify payload 
                    //let body = JSON.stringify({ "RegionID":regionID,"RegionDescription":regionDescription });
                    var headers = new http_1.Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
                    var headers1 = new http_1.Headers({ 'Content-Type': 'application/json' });
                    var options = new http_1.RequestOptions({ headers: headers1, method: "post" });
                    return this._http.put('PUT URL', bodyString, options)
                        .map(function (res) { return res.json(); })
                        .catch(this.handleError);
                };
                RegionService.prototype.deleteRegion = function (id) {
                    //let bodyString = JSON.stringify(body); // Stringify payload 
                    //let body = JSON.stringify({ "RegionID":regionID,"RegionDescription":regionDescription });
                    var headers = new http_1.Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
                    var headers1 = new http_1.Headers({ 'Content-Type': 'application/json' });
                    var options = new http_1.RequestOptions({ headers: headers1, method: "post" });
                    return this._http.delete('http://northwindapi.codebhagat.com/api/Region/${id}')
                        .map(function (res) { return res.json(); })
                        .catch(this.handleError);
                };
                RegionService.prototype.getHeaders = function () {
                    var headers = new http_1.Headers();
                    headers.append('Accept', 'application/json');
                    //headers.append('Access-Control-Allow-Headers', 'Content-Type');
                    //headers.append('Access-Control-Allow-Methods', 'GET');
                    //headers.append('Access-Control-Allow-Origin', '*');
                    return headers;
                };
                RegionService.prototype.handleError = function (error) {
                    console.error(error);
                    return Rx_1.Observable.throw(error.json().error || 'Server error.');
                };
                RegionService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], RegionService);
                return RegionService;
            }());
            exports_1("RegionService", RegionService);
        }
    }
});
/*
    private extractData(res: Response) {
        let body = res.json();
        return body.data || { };
    }

    
    private handleError1 (error: any) {
    // In a real world app, we might use a remote logging infrastructure
    // We'd also dig deeper into the error to get a better message
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg); // log to console instead
    return Observable.throw(errMsg);
  */
//# sourceMappingURL=Region.service.js.map