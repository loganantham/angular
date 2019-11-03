import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  loggedInFlag:Boolean;

  constructor() { 
    this.loggedInFlag = false;
  }

}
