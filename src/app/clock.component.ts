import { Component } from '@angular/core';
import { ClockService } from './clock.service';
import { Observable } from 'rxjs/Observable';


@Component({
  selector: 'clock',
  template: `<div>time:{{ clock$ | async }}</div>
  `,
})
export class ClockComponent {
  clock$: Observable<String> = this._clockService.clock$;
  constructor(private _clockService: ClockService) {
  }
}
