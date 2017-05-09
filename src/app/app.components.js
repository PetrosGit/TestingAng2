"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var login_service_1 = require("./login.service");
var AppComponent = (function () {
    function AppComponent(_loginService) {
        var _this = this;
        this._loginService = _loginService;
        this.title = 'Tour of Heroes';
        this.access = false;
        this.access$ = this._loginService.access$;
        this.privateLink = '/login';
        this.privateTag = 'Login';
        this.access$.subscribe(function (access) {
            _this.privateLink = access ? '/private' : '/login';
            _this.privateTag = access ? 'Private' : 'Login';
        });
    }
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        template: "\n     <h1>{{title}}</h1>\n     <clock></clock>\n     <a routerLink=\"/heroes\">Heroes</a>\n     <router-outlet></router-outlet>\n     <a routerLink=\"/aboutus\">AboutUs</a>\n     <router-outlet></router-outlet>\n     <a routerLink={{privateLink}}>{{privateTag}}</a>\n     <router-outlet></router-outlet>"
    }),
    __metadata("design:paramtypes", [login_service_1.LoginService])
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.components.js.map