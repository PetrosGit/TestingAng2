"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var AboutUsComponent = (function () {
    function AboutUsComponent() {
        this.title = 'AboutUs';
    }
    return AboutUsComponent;
}());
AboutUsComponent = __decorate([
    core_1.Component({
        selector: 'about-us',
        template: "\n     <h1>About Us</h1>\n      <p> Our website provides information on all super heroes of the area available to you</p>\n      <p> I have no more Funny ideas about this project . Peace out !#muchoMacho</p>"
    })
], AboutUsComponent);
exports.AboutUsComponent = AboutUsComponent;
//# sourceMappingURL=aboutus.components.js.map