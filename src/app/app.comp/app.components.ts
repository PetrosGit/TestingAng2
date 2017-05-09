import { Component } from '@angular/core';
import { ClockComponent } from '../clock/clock.component'
import { Observable } from 'rxjs/Observable';
import { LoginService } from '../login/login.service'

@Component({
  selector: 'my-app',
  template: `
     <h1>{{title}}</h1>
     <clock></clock>
     <a routerLink="/heroes">Heroes</a>
     <router-outlet></router-outlet>
     <a routerLink="/aboutus">AboutUs</a>
     <router-outlet></router-outlet>
     <a routerLink={{privateLink}}>{{privateTag}}</a>
     <router-outlet></router-outlet>`

})

export class AppComponent {
  title = 'Tour of Heroes';
  access: Boolean = false;
  access$: Observable<Boolean> = this._loginService.access$;
  privateLink: String = '/login';
  privateTag: String =  'Login'
  constructor(private _loginService: LoginService){
    this.access$.subscribe((access: Boolean) => {
      this.privateLink =  access ? '/private' : '/login';
      this.privateTag = access ? 'Private' :  'Login';

    });
  }
}
