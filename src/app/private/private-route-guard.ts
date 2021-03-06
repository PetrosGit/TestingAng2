import { CanActivate } from '@angular/router';
import { Injectable } from '@angular/core'
import { LoginService } from '../login/login.service';

@Injectable()
export class PrivateGuard implements CanActivate {

  constructor(private _loginService: LoginService) {}

  canActivate() {
    return this._loginService.access$;
  }

}
