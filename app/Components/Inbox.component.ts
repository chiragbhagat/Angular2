import { Component, OnInit } from 'angular2/core';
import { Router } from 'angular2/router';

@Component({
  selector: 'my-inbox',
  templateUrl: 'app/Views/Inbox.html' 
})
export class InboxComponent implements OnInit {

  constructor(
    private _router: Router) {
  }

  ngOnInit() {
  }

}
