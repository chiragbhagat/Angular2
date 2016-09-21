import { Component, OnInit } from 'angular2/core';
import { Router } from 'angular2/router';

@Component({
  selector: 'my-about',
  templateUrl: 'app/Views/Calendar.html' 
})
export class CalendarComponent implements OnInit {

  constructor(
    private _router: Router) {
  }

  ngOnInit() {
  }

}
