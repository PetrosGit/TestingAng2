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
var userinfo_1 = require("./userinfo");
var LoginComponent = (function () {
    function LoginComponent(_loginService) {
        this._loginService = _loginService;
    }
    LoginComponent.prototype.doLogin = function (event) {
        event.preventDefault();
        this._loginService.onLogin(new userinfo_1.UserInfo(event.target.email.value, event.target.password.value));
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    core_1.Component({
        selector: 'login',
        template: "\n  <form (submit) = \"doLogin($event)\">\n    <input name=\"email\" type=\"email\" placeholder=\"Your email\">\n    <input name=\"password\" type=\"password\" placeholder=\"Your password\">\n    <button type=\"submit\">Log in</button>\n  </form>\n  "
    }),
    __metadata("design:paramtypes", [login_service_1.LoginService])
], LoginComponent);
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=login.component.js.map