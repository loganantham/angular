import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  template:`
    <topmenu></topmenu>
    <router-outlet></router-outlet>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app-ui';
  router:string;

  constructor(private _router : Router){
    this.router = _router.url;
  }
}
