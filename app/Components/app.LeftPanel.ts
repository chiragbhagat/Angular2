import { Component } from 'angular2/core';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from 'angular2/router';
import { dashboardComponent } from './dashboard.component';
import { ProductComponent } from './Product.component';

@Component({
  selector: 'my-LeftPanel', 
  templateUrl: 'app/Views/LeftPanel.html',
  directives: [ROUTER_DIRECTIVES],
   providers: [
    ROUTER_PROVIDERS 
  ]
})
@RouteConfig([
  { path: '/dashboard', name: 'Dashboard', component: dashboardComponent, useAsDefault: true },
  { path: '/Product', name: 'Product', component: ProductComponent }
])

export class LeftPanelComp {
  
}


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/