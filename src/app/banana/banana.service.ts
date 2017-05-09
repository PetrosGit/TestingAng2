import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { Hero } from '../models/hero'


@Injectable()
export class BananaService {
    private _banana: Subject<Hero[]> = new Subject<Hero[]>();
    banana$: Observable<Hero[]> = this._banana as Observable<Hero[]>;

    changeBanana(value: Hero[]){

      this._banana.next(value);
    }
}
