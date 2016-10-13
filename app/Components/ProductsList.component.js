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
    var ProductsListComponent;
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
            ProductsListComponent = (function () {
                function ProductsListComponent(_router, productsService) {
                    this._router = _router;
                    this.productsService = productsService;
                    this.messages = [];
                }
                ProductsListComponent.prototype.ngOnInit = function () {
                    this.message = "This is test!!!!";
                    //this.productsService.getAll().subscribe(record => this.products=record);
                    this.getProducts();
                };
                ProductsListComponent.prototype.getProducts = function () {
                    var _this = this;
                    this.productsService.getAll().subscribe(function (record) { return _this.products = record; });
                    this.productsService.getByID(1).subscribe(function (record) { return _this.selectedProduct = record; });
                };
                ProductsListComponent.prototype.SelectProduct = function (item) {
                    this.selectedProduct = item;
                };
                ProductsListComponent.prototype.getProductsBy = function () {
                    var _this = this;
                    this.productsService.getAllBy("CategoryID=1").subscribe(function (record) { return _this.products = record; });
                };
                ProductsListComponent.prototype.getProductsByPaging = function () {
                    var _this = this;
                    this.productsService.getAllByPaging("CategoryID=1").subscribe(function (record) { return _this.products = record; });
                };
                ProductsListComponent.prototype.getProductsByID = function () {
                    var _this = this;
                    this.productsService.getByID(1).subscribe(function (record) { return _this.selectedProduct = record; });
                };
                /*
                  select(selectedProduct: ProductsData) {
                    this.selectedProduct = selectedProduct;
                    this.changed.emit(selectedProduct);
                  }
                */
                ProductsListComponent.prototype.clear = function () {
                    this.selectedProduct = null;
                };
                ProductsListComponent.prototype.log = function (msg) {
                    this.messages.splice(0, 0, msg);
                    console.log(msg);
                };
                ProductsListComponent = __decorate([
                    core_1.Component({
                        selector: 'productsList',
                        templateUrl: 'app/Views/Products.html',
                        providers: [http_1.HTTP_PROVIDERS, router_1.ROUTER_DIRECTIVES, Products_service_1.ProductsService]
                    }), 
                    __metadata('design:paramtypes', [router_1.Router, Products_service_1.ProductsService])
                ], ProductsListComponent);
                return ProductsListComponent;
            }());
            exports_1("ProductsListComponent", ProductsListComponent);
        }
    }
});
//# sourceMappingURL=ProductsList.component.js.map