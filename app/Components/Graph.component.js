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
    var RegionData, GraphComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            }],
        execute: function() {
            RegionData = (function () {
                function RegionData(regionID, regionDescription) {
                    this.regionID = regionID;
                    this.regionDescription = regionDescription;
                    this.RegionID = regionID;
                    this.RegionDescription = regionDescription;
                }
                RegionData = __decorate([
                    core_1.Component({
                        selector: 'my-graph',
                        templateUrl: 'app/Views/Graphs.html'
                    }), 
                    __metadata('design:paramtypes', [Number, String])
                ], RegionData);
                return RegionData;
            }());
            GraphComponent = (function () {
                function GraphComponent(_router, http) {
                    this._router = _router;
                    this.http = http;
                }
                GraphComponent.prototype.ngOnInit = function () {
                    //this.getRequest();
                };
                GraphComponent.prototype.makeRequest = function () {
                    var _this = this;
                    this.http.request("http://northwindapi.codebhagat.com/api/Region", { headers: this.getHeaders() })
                        .subscribe(function (res) {
                        _this.data = res.json();
                    });
                };
                GraphComponent.prototype.getRequest = function () {
                    var _this = this;
                    this.http.request('http://northwindapi.codebhagat.com/api/Region', { headers: this.getHeaders() })
                        .map(function (res) { return res.json(); })
                        .subscribe(function (data) { _this.regions = data; }, function (err) { return console.error(err); }, function () { return console.log('done'); });
                };
                GraphComponent.prototype.clone = function (object) {
                    // hack
                    return JSON.parse(JSON.stringify(object));
                };
                GraphComponent.prototype.getHeaders = function () {
                    var headers = new http_1.Headers();
                    headers.append('Accept', 'application/json');
                    //headers.append('Access-Control-Allow-Headers', 'Content-Type');
                    //headers.append('Access-Control-Allow-Methods', 'GET');
                    //headers.append('Access-Control-Allow-Origin', '*');
                    return headers;
                };
                return GraphComponent;
            }());
            exports_1("GraphComponent", GraphComponent);
        }
    }
});
//# sourceMappingURL=Graph.component.js.map