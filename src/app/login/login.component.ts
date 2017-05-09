import { Component } from '@angular/core';
import { LoginService } from './login.service';
import { UserInfo } from '../models/userinfo';

@Component({
  selector: 'login',
  template: `
  <form (submit) = "doLogin($event)">
    <input name="email" type="email" placeholder="Your email">
    <input name="password" type="password" placeholder="Your password">
    <button type="submit">Log in</button>
  </form>
  `
})

export class LoginComponent {
  constructor(private _loginService: LoginService) {}

  doLogin(event: any) {
    event.preventDefault();
    this._loginService.onLogin(new UserInfo(
      event.target.email.value,
      event.target.password.value)
    );
   }
}
