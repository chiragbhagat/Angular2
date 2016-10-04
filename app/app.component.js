System.register(['angular2/core', 'angular2/http', 'angular2/router', 'rxjs/Rx', './Components/Home/dashboard.component', './Components/Home/Inbox.component', './Components/Home/About.component', './Components/Home/Contact.component', './Components/Account/Register.component', './Components/Account/Profile.component', './Components/Account/ChangePassword.component', './Components/Account/ForgotPassword.component', './Components/Product.component', './Components/Region.component', './Components/Graph.component', './Components/Settings.component', './Components/Calendar.component', './Components/Account/Login.component'], function(exports_1, context_1) {
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
    var core_1, http_1, router_1, dashboard_component_1, Inbox_component_1, About_component_1, Contact_component_1, Register_component_1, Profile_component_1, ChangePassword_component_1, ForgotPassword_component_1, Product_component_1, Region_component_1, Graph_component_1, Settings_component_1, Calendar_component_1, Login_component_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (_1) {},
            function (dashboard_component_1_1) {
                dashboard_component_1 = dashboard_component_1_1;
            },
            function (Inbox_component_1_1) {
                Inbox_component_1 = Inbox_component_1_1;
            },
            function (About_component_1_1) {
                About_component_1 = About_component_1_1;
            },
            function (Contact_component_1_1) {
                Contact_component_1 = Contact_component_1_1;
            },
            function (Register_component_1_1) {
                Register_component_1 = Register_component_1_1;
            },
            function (Profile_component_1_1) {
                Profile_component_1 = Profile_component_1_1;
            },
            function (ChangePassword_component_1_1) {
                ChangePassword_component_1 = ChangePassword_component_1_1;
            },
            function (ForgotPassword_component_1_1) {
                ForgotPassword_component_1 = ForgotPassword_component_1_1;
            },
            function (Product_component_1_1) {
                Product_component_1 = Product_component_1_1;
            },
            function (Region_component_1_1) {
                Region_component_1 = Region_component_1_1;
            },
            function (Graph_component_1_1) {
                Graph_component_1 = Graph_component_1_1;
            },
            function (Settings_component_1_1) {
                Settings_component_1 = Settings_component_1_1;
            },
            function (Calendar_component_1_1) {
                Calendar_component_1 = Calendar_component_1_1;
            },
            function (Login_component_1_1) {
                Login_component_1 = Login_component_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                    this.title = 'Tour of Heroes new update now... ';
                }
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        templateUrl: 'app/Views/AppLayout.html',
                        directives: [router_1.ROUTER_DIRECTIVES],
                        providers: [
                            http_1.HTTP_PROVIDERS,
                            router_1.ROUTER_PROVIDERS
                        ]
                    }),
                    router_1.RouteConfig([
                        { path: '/', name: 'Dashboard', component: dashboard_component_1.dashboardComponent, useAsDefault: true },
                        { path: '/Login', name: 'Login', component: Login_component_1.LoginComponent },
                        { path: '/Register', name: 'Register', component: Register_component_1.RegisterComponent },
                        { path: '/Profile', name: 'Profile', component: Profile_component_1.ProfileComponent },
                        { path: '/ChangePassword', name: 'ChangePassword', component: ChangePassword_component_1.ChangePasswordComponent },
                        { path: '/ForgotPassword', name: 'ForgotPassword', component: ForgotPassword_component_1.ForgotPasswordComponent },
                        { path: '/Product', name: 'Product', component: Product_component_1.ProductComponent },
                        { path: '/Region', name: 'Region', component: Region_component_1.RegionComponent },
                        { path: '/Inbox', name: 'Inbox', component: Inbox_component_1.InboxComponent },
                        { path: '/Graphs', name: 'Graphs', component: Graph_component_1.GraphComponent },
                        { path: '/Calendar', name: 'Calendar', component: Calendar_component_1.CalendarComponent },
                        { path: '/Settings', name: 'Settings', component: Settings_component_1.SettingsComponent },
                        { path: '/About', name: 'About', component: About_component_1.AboutComponent },
                        { path: '/Contact', name: 'Contact', component: Contact_component_1.ContactComponent }
                    ]), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map