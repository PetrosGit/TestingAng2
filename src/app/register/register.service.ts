import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router'
import { LoginService } from '../login/login.service';
import { UserInfo} from '../models/userinfo';

@Injectable()
export class RegisterService {
  constructor(
    private _router: Router,
    private _loginService: LoginService
  ){

  }
    onRegister(info: UserInfo) {
      if (
        localStorage.getItem(info.email) === null
      ) {
        localStorage.setItem(info.email, info.password);
        this._loginService.onLogin(info);
      }
      else {
        alert('Username already in use');
      }

    }
}
