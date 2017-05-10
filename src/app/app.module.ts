
import { PrivateGuard } from './private/private-route-guard';
import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { RouterModule }   from '@angular/router';
import { HttpModule } from '@angular/http';
import { AppComponent }        from './app.comp/app.components';
import { HeroDetailComponent } from './hero-details/hero-detail.component';
import { AboutUsComponent } from './aboutUs/aboutus.components';
import { BananaService } from './banana/banana.service';
import { BananaComponent } from './banana/banana.components';
import { ClockComponent } from './clock/clock.component';
import { ClockService } from './clock/clock.service';
import { LoginComponent } from './login/login.component';
import { PrivateComponent } from './private/private.component';
import { LoginService } from './login/login.service';
import { LoginGuard } from './login/login-route-guard';
import { RegisterComponent } from './register/register.component';
import { RegisterService } from './register/register.service';

@NgModule({
  imports: [
    HttpModule,
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      {
        path: 'heroes',
        component: BananaComponent
      },{
        path: 'aboutus',
        component: AboutUsComponent
      },{
        path: 'login',
        component: LoginComponent,
        canActivate: [LoginGuard]
      },{
        path: 'private',
        component: PrivateComponent,
        canActivate: [PrivateGuard]
      }
      ,{
        path: 'register',
        component: RegisterComponent,
        canActivate: [LoginGuard]
      }
    ])
  ],
  declarations: [
    AppComponent,
    HeroDetailComponent,
    AboutUsComponent,
    BananaComponent,
    ClockComponent,
    LoginComponent,
    PrivateComponent,
    RegisterComponent,
  ],
  providers: [
    BananaService,
    ClockService,
    LoginService,
    PrivateGuard,
    RegisterService,
    LoginGuard,
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {
}
