import { Component } from '@angular/core'
import { ClockComponent } from '../clock/clock.component'
import { Observable } from 'rxjs/Observable';
import { LoginService } from '../login/login.service'
import { BehaviorSubject } from 'rxjs/BehaviorSubject';


@Component({
  selector: 'my-app',
  template: `
     <h1>{{title}}</h1>
     <clock></clock>
     <a routerLink="/heroes">Heroes</a>
     <router-outlet></router-outlet>
     <a routerLink="/aboutus">AboutUs</a>
     <router-outlet></router-outlet>
     <a routerLink="/private" *ngIf = "access">Private</a>
     <router-outlet></router-outlet>
     <a routerLink= "/login" *ngIf = "!access">Login</a>
     <router-outlet></router-outlet>`

})

export class AppComponent {
  title = 'Tour of Heroes';
  access = false;
  access$: BehaviorSubject<boolean> = this._loginService.access$;
  constructor(private _loginService: LoginService){
  }

  ngOnInit(){
      this.access$.subscribe((access: boolean) => {
      this.access = access;
    });
  }

}
