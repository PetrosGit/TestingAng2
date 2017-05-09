import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router'
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { UserInfo} from '../models/userinfo';

@Injectable()
export class LoginService {
  private _access: BehaviorSubject<Boolean> = new BehaviorSubject<Boolean>(false);
  access$: Observable<Boolean> = this._access as Observable<Boolean>
  constructor(private _router: Router){

  }
    onLogin(info: UserInfo) {
      this._access.next(true);
      this._router.navigate(['/private']);
    }
}
