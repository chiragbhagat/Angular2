import { Component, OnInit } from 'angular2/core';
import { Router, ROUTER_DIRECTIVES } from 'angular2/router';

@Component({
  selector: 'my-login',
  templateUrl: 'app/Views/Account/Login.html',
  directives: [ROUTER_DIRECTIVES]
})

export class LoginComponent implements OnInit {

  constructor(
    private _router: Router) {
  }

  ngOnInit() {
  }

}
