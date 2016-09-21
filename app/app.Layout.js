System.register(['angular2/core', 'angular2/router', './Components/dashboard.component', './Components/Product.component', './Components/Graph.component', './Components/Inbox.component', './Components/Settings.component', './Components/About.component', './Components/Contact.component', './Components/Calendar.component'], function(exports_1, context_1) {
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
    var core_1, router_1, dashboard_component_1, Product_component_1, Graph_component_1, Inbox_component_1, Settings_component_1, About_component_1, Contact_component_1, Calendar_component_1;
    var AppLayoutComp;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (dashboard_component_1_1) {
                dashboard_component_1 = dashboard_component_1_1;
            },
            function (Product_component_1_1) {
                Product_component_1 = Product_component_1_1;
            },
            function (Graph_component_1_1) {
                Graph_component_1 = Graph_component_1_1;
            },
            function (Inbox_component_1_1) {
                Inbox_component_1 = Inbox_component_1_1;
            },
            function (Settings_component_1_1) {
                Settings_component_1 = Settings_component_1_1;
            },
            function (About_component_1_1) {
                About_component_1 = About_component_1_1;
            },
            function (Contact_component_1_1) {
                Contact_component_1 = Contact_component_1_1;
            },
            function (Calendar_component_1_1) {
                Calendar_component_1 = Calendar_component_1_1;
            }],
        execute: function() {
            AppLayoutComp = (function () {
                function AppLayoutComp() {
                }
                AppLayoutComp = __decorate([
                    core_1.Component({
                        selector: 'my-Layout',
                        templateUrl: 'app/Views/AppLayout.html',
                        directives: [router_1.ROUTER_DIRECTIVES],
                        providers: [
                            router_1.ROUTER_PROVIDERS
                        ]
                    }),
                    router_1.RouteConfig([
                        { path: '/', name: 'Dashboard', component: dashboard_component_1.dashboardComponent, useAsDefault: true },
                        { path: '/Product', name: 'Product', component: Product_component_1.ProductComponent },
                        { path: '/Inbox', name: 'Inbox', component: Inbox_component_1.InboxComponent },
                        { path: '/Graphs', name: 'Graphs', component: Graph_component_1.GraphComponent },
                        { path: '/Calendar', name: 'Calendar', component: Calendar_component_1.CalendarComponent },
                        { path: '/Settings', name: 'Settings', component: Settings_component_1.SettingsComponent },
                        { path: '/About', name: 'About', component: About_component_1.AboutComponent },
                        { path: '/Contact', name: 'Contact', component: Contact_component_1.ContactComponent }
                    ]), 
                    __metadata('design:paramtypes', [])
                ], AppLayoutComp);
                return AppLayoutComp;
            }());
            exports_1("AppLayoutComp", AppLayoutComp);
        }
    }
});
/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/ 
//# sourceMappingURL=app.Layout.js.map