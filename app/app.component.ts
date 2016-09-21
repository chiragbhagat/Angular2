import { Component } from 'angular2/core';
//import { HTTP_PROVIDERS, XHRBackend } from 'angular2/http';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from 'angular2/router';
// Home
import { dashboardComponent } from './Components/Home/dashboard.component';
import { InboxComponent } from './Components/Home/Inbox.component';
import { AboutComponent } from './Components/Home/About.component';
import { ContactComponent } from './Components/Home/Contact.component';
// Account
import { RegisterComponent } from './Components/Account/Register.component';
import { ProfileComponent } from './Components/Account/Profile.component';
import { ChangePasswordComponent } from './Components/Account/ChangePassword.component';
import { ForgotPasswordComponent } from './Components/Account/ForgotPassword.component';

import { ProductComponent } from './Components/Product.component';
import { GraphComponent } from './Components/Graph.component';
import { SettingsComponent } from './Components/Settings.component';
import { CalendarComponent } from './Components/Calendar.component';
import { LoginComponent } from './Components/Account/Login.component';

@Component({
  selector: 'my-app',
  templateUrl: 'app/Views/AppLayout.html',
  directives: [ROUTER_DIRECTIVES],
   providers: [
    ROUTER_PROVIDERS 
  ]
}) 

@RouteConfig([
  { path: '/', name: 'Dashboard', component: dashboardComponent, useAsDefault: true },
  { path: '/Login', name: 'Login', component: LoginComponent },
  { path: '/Register', name: 'Register', component: RegisterComponent },
  { path: '/Profile', name: 'Profile', component: ProfileComponent },
  { path: '/ChangePassword', name: 'ChangePassword', component: ChangePasswordComponent },
  { path: '/ForgotPassword', name: 'ForgotPassword', component: ForgotPasswordComponent },
  { path: '/Product', name: 'Product', component: ProductComponent },
  { path: '/Inbox', name: 'Inbox', component: InboxComponent },
  { path: '/Graphs', name: 'Graphs', component: GraphComponent },
  { path: '/Calendar', name: 'Calendar', component: CalendarComponent },
  { path: '/Settings', name: 'Settings', component: SettingsComponent },
  { path: '/About', name: 'About', component: AboutComponent },
  { path: '/Contact', name: 'Contact', component: ContactComponent }
])

export class AppComponent {
  title = 'Tour of Heroes new update now ';
}
