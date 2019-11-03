import { Component, OnInit } from '@angular/core';
import {LoginService} from '../service/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(private loginService : LoginService,private router : Router) { }

  ngOnInit() {
    
  }

  login(){
    this.router.navigate(['home']);
  }

}
