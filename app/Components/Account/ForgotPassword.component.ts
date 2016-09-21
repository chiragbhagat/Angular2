import { Component, OnInit } from 'angular2/core';
import { Router } from 'angular2/router';

@Component({
  selector: 'my-forgotpassword',
  templateUrl: 'app/Views/Account/ForgotPassword.html' 
})
export class ForgotPasswordComponent implements OnInit {

  constructor(
    private _router: Router) {
  }

  ngOnInit() {
  }

}
