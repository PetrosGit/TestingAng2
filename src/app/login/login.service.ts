import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router'
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { UserInfo} from '../models/userinfo';

@Injectable()
export class LoginService {
  access$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  constructor(private _router: Router){

  }
    onLogin(info: UserInfo) {
      if (
        localStorage.getItem(info.email) === info.password
      ) {
        this.access$.next(true);
        this._router.navigate(['/private']);
      }
      else {
        alert('Username or password did not match!')
      }

    }

    clickedRegister(){
      this._router.navigate(['/register']);
    }
}
