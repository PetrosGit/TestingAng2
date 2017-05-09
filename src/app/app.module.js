"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var router_1 = require("@angular/router");
var http_1 = require("@angular/http");
var app_components_1 = require("./app.comp/app.components");
var hero_detail_component_1 = require("./hero-details/hero-detail.component");
var aboutus_components_1 = require("./aboutUs/aboutus.components");
var banana_service_1 = require("./banana/banana.service");
var banana_components_1 = require("./banana/banana.components");
var clock_component_1 = require("./clock/clock.component");
var clock_service_1 = require("./clock/clock.service");
var login_component_1 = require("./login/login.component");
var private_component_1 = require("./private/private.component");
var login_service_1 = require("./login/login.service");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            http_1.HttpModule,
            platform_browser_1.BrowserModule,
            forms_1.FormsModule,
            router_1.RouterModule.forRoot([
                {
                    path: 'heroes',
                    component: banana_components_1.BananaComponent
                }, {
                    path: 'aboutus',
                    component: aboutus_components_1.AboutUsComponent
                }, {
                    path: 'login',
                    component: login_component_1.LoginComponent
                }, {
                    path: 'private',
                    component: private_component_1.PrivateComponent
                }
            ])
        ],
        declarations: [
            app_components_1.AppComponent,
            hero_detail_component_1.HeroDetailComponent,
            aboutus_components_1.AboutUsComponent,
            banana_components_1.BananaComponent,
            clock_component_1.ClockComponent,
            login_component_1.LoginComponent,
            private_component_1.PrivateComponent,
        ],
        providers: [
            banana_service_1.BananaService,
            clock_service_1.ClockService,
            login_service_1.LoginService,
        ],
        bootstrap: [app_components_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map