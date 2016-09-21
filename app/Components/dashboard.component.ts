import { Component, OnInit } from 'angular2/core';
import { Router } from 'angular2/router';

@Component({
  selector: 'my-dashboard',
  templateUrl: 'app/Views/dashboard.html' 
})

export class dashboardComponent implements OnInit {
  constructor(
    private _router: Router) {
  }

  ngOnInit() {
  }
}
