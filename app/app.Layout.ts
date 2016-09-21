import { Component } from 'angular2/core';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from 'angular2/router';
import { dashboardComponent } from './Components/dashboard.component';
import { ProductComponent } from './Components/Product.component';
import { GraphComponent } from './Components/Graph.component';
import { InboxComponent } from './Components/Inbox.component';
import { SettingsComponent } from './Components/Settings.component';
import { AboutComponent } from './Components/About.component';
import { ContactComponent } from './Components/Contact.component';
import { CalendarComponent } from './Components/Calendar.component';

@Component({
  selector: 'my-Layout', 
  templateUrl: 'app/Views/AppLayout.html',
  directives: [ROUTER_DIRECTIVES],
   providers: [
    ROUTER_PROVIDERS 
  ]
})
 
@RouteConfig([
  { path: '/', name: 'Dashboard', component: dashboardComponent, useAsDefault: true },
  { path: '/Product', name: 'Product', component: ProductComponent },
  { path: '/Inbox', name: 'Inbox', component: InboxComponent },
  { path: '/Graphs', name: 'Graphs', component: GraphComponent },
  { path: '/Calendar', name: 'Calendar', component: CalendarComponent },
  { path: '/Settings', name: 'Settings', component: SettingsComponent },
  { path: '/About', name: 'About', component: AboutComponent },
  { path: '/Contact', name: 'Contact', component: ContactComponent }
])

export class AppLayoutComp
{
  
}


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/