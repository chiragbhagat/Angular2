System.register(['angular2/core', 'angular2/router', 'angular2/http', '../Services/Products.service'], function(exports_1, context_1) {
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
    var core_1, router_1, http_1, Products_service_1;
    var ProductComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (Products_service_1_1) {
                Products_service_1 = Products_service_1_1;
            }],
        execute: function() {
            ProductComponent = (function () {
                function ProductComponent(_router, productsService) {
                    this._router = _router;
                    this.productsService = productsService;
                    this.messages = [];
                }
                ProductComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.message = "This is test!!!!";
                    this.productsService.getAll().subscribe(function (record) { return _this.products = record; });
                    //this.products = this.productsService.getAll();
                };
                ProductComponent.prototype.getProducts = function () {
                    var _this = this;
                    this.productsService.getAll().subscribe(function (record) { return _this.products = record; });
                };
                /*
                  select(selectedProduct: ProductsData) {
                    this.selectedProduct = selectedProduct;
                    this.changed.emit(selectedProduct);
                  }
                */
                ProductComponent.prototype.clear = function () {
                    this.selectedProduct = null;
                };
                ProductComponent.prototype.log = function (msg) {
                    this.messages.splice(0, 0, msg);
                    console.log(msg);
                };
                ProductComponent = __decorate([
                    core_1.Component({
                        selector: 'my-product',
                        templateUrl: 'app/Views/Products.html',
                        providers: [http_1.HTTP_PROVIDERS, Products_service_1.ProductsService]
                    }), 
                    __metadata('design:paramtypes', [router_1.Router, Products_service_1.ProductsService])
                ], ProductComponent);
                return ProductComponent;
            }());
            exports_1("ProductComponent", ProductComponent);
        }
    }
});
//# sourceMappingURL=Product.component.js.map