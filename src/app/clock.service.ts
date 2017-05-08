import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/observable/interval';
import 'rxjs/add/operator/map';

@Injectable()
export class ClockService {
    //_clock: Subject<String> = new Subject<String>();
    clock$ =  Observable.interval(1000).map(()=> new Date().toString().slice(15,25));
//     startClock(){
//       setInterval(()=> {
//         this._clock.next(new Date().toString().slice(15,25))
// })
//}
    createClock() {
      this.clock$
    }
}
