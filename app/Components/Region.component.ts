import { Component, EventEmitter, Input, Output, OnInit } from 'angular2/core';
import { Observable } from 'rxjs/Rx';
import { Router } from 'angular2/router';
import { HTTP_PROVIDERS } from 'angular2/http';
import { RegionData, RegionService } from '../Services/Region.service';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from 'angular2/router';
import 'rxjs/Rx'; // load the full rxjs 
import { RegionListComponent } from './RegionList.component';
import { RegionAddComponent } from './RegionAdd.component';
import { RegionEditComponent } from './RegionEdit.component';


@Component({
  selector: 'my-regions',
  template: `
    <router-outlet></router-outlet>
  `,
  directives: [ROUTER_DIRECTIVES],
  providers: [HTTP_PROVIDERS, RegionService]
})

@RouteConfig([
  { path: '/', name: 'Region', component: RegionListComponent, useAsDefault: true },
	{ path: '/Add', name: 'RegionAdd', component: RegionAddComponent },
	{ path: '/Edit/:id', name: 'RegionEdit', component: RegionEditComponent },
])

export class RegionComponent { }
