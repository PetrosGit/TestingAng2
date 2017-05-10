import { Component } from '@angular/core';
import { RegisterService } from './register.service';
import { UserInfo } from '../models/userinfo';

@Component({
  selector: 'register',
  template: `
  <form (submit) = "registerOnLocal($event)">
    <input name="email" type="email" placeholder="Your email" autofocus>
    <input name="password" type="password" placeholder="Your password">
    <button type="submit">Register</button>
  </form>
  <br>
  `
})

export class RegisterComponent {
  constructor(private _registerService: RegisterService) {}

   registerOnLocal(event: any){
     event.preventDefault();
     this._registerService.onRegister(new UserInfo
       (
       event.target.email.value,
       event.target.password.value
     ));
   }
}
