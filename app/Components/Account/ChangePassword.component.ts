import { Component, OnInit } from 'angular2/core';
import { Router } from 'angular2/router';

@Component({
  selector: 'my-changepassword',
  templateUrl: 'app/Views/Account/ChangePassword.html' 
})
export class ChangePasswordComponent implements OnInit {

  constructor(
    private _router: Router) {
  }

  ngOnInit() {
  }

}
