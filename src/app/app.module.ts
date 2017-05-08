import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { RouterModule }   from '@angular/router';
import { HttpModule } from '@angular/http';
import { AppComponent }        from './app.components';
import { HeroDetailComponent } from './hero-detail.component';
import { HeroesComponent }     from './heroes.component';
import { HeroService }         from './hero.service';
import { AboutUsComponent } from './aboutus.components';
import { BananaService } from './banana.service';
import { BananaComponent } from './banana.components';
import { ClockComponent } from './clock.component';
import { ClockService } from './clock.service';
import { LoginComponent } from './login.component';
import { PrivateComponent } from './private.component';
import { LoginService } from './login.service';

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
        component: LoginComponent
      },{
        path: 'private',
        component: PrivateComponent
      }
    ])
  ],
  declarations: [
    AppComponent,
    HeroDetailComponent,
    HeroesComponent,
    AboutUsComponent,
    BananaComponent,
    ClockComponent,
    LoginComponent,
    PrivateComponent,
  ],
  providers: [
    HeroService,
    BananaService,
    ClockService,
    LoginService,
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {
}
