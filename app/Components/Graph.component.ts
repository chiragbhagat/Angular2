import { Component, OnInit } from 'angular2/core';
import { Router } from 'angular2/router';

@Component({
  selector: 'my-graph',
  templateUrl: 'app/Views/Graphs.html' 
})
export class GraphComponent implements OnInit {

  constructor(
    private _router: Router) {
  }

  ngOnInit() {
  }

}
