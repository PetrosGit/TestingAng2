import { Component } from '@angular/core';
import { LoginService } from './login.service';
import { UserInfo } from '../models/userinfo';

@Component({
  selector: 'login',
  template: `
  <form (submit) = "doLogin($event)">
    <input name="email" type="email" placeholder="Your email" autofocus>
    <input name="password" type="password" placeholder="Your password">
    <button type="submit">Log in</button>
  </form>
  <br>
  <button (click) = 'clickRegister()'> not Registed?? </button>
  `
})

export class LoginComponent {
  constructor(private _loginService: LoginService) {}

  doLogin(event: any) {
    event.preventDefault();
    localStorage.setItem('p','p');
    this._loginService.onLogin(new UserInfo(
      event.target.email.value,
      event.target.password.value)
    );
   }
   clickRegister(){
     this._loginService.clickedRegister();
   }
}
