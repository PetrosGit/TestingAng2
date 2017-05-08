"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var Observable_1 = require("rxjs/Observable");
require("rxjs/add/observable/interval");
require("rxjs/add/operator/map");
var ClockService = (function () {
    function ClockService() {
        //_clock: Subject<String> = new Subject<String>();
        this.clock$ = Observable_1.Observable.interval(1000).map(function () { return new Date().toString().slice(15, 25); });
    }
    //     startClock(){
    //       setInterval(()=> {
    //         this._clock.next(new Date().toString().slice(15,25))
    // })
    //}
    ClockService.prototype.createClock = function () {
        this.clock$;
    };
    return ClockService;
}());
ClockService = __decorate([
    core_1.Injectable()
], ClockService);
exports.ClockService = ClockService;
//# sourceMappingURL=clock.service.js.map