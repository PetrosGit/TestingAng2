import { Component } from '@angular/core';
import { BananaService } from './banana.service';
import { Observable } from 'rxjs/Observable';
import { HEROES } from './mock-heroes';
import { Hero } from './hero'

@Component({
  selector: 'banana',
  template: `
    <h2>My Heroes</h2>
    <ul class="heroes">
      <li *ngFor="let hero of (banana$ | async)"
        [class.selected]="hero === selectedHero"
        (click)="onSelect(hero)">
        <span class="badge">{{hero.id}}:</span>{{hero.name}}
      </li>
    </ul>
    <hero-detail [hero]="selectedHero"></hero-detail>
  `,
  styles: [`
    .selected {
      background-color: #CFD8DC !important;
      color: white;
    }
    .heroes {
      margin: 0 0 2em 0;
      list-style-type: none;
      padding: 0;
      width: 15em;
    }
    .heroes li {
      cursor: pointer;
      position: relative;
      left: 0;
      background-color: #EEE;
      margin: .5em;
      padding: .3em 0;
      height: 1.6em;
      border-radius: 4px;
    }
    .heroes li.selected:hover {
      background-color: #BBD8DC !important;
      color: white;
    }
    .heroes li:hover {
      color: #607D8B;
      background-color: #DDD;
      left: .1em;
    }
    .heroes .text {
      position: relative;
      top: -3px;
    }
    .heroes .badge {
      display: inline-block;
      font-size: small;
      color: white;
      padding: 0.8em 0.7em 0 0.7em;
      background-color: #607D8B;
      line-height: 1em;
      position: relative;
      left: -1px;
      top: -4px;
      height: 1.8em;
      margin-right: .8em;
      border-radius: 4px 0 0 4px;
    }
  `],
})
export class BananaComponent {
  title = 'Tour of Heroes';
  selectedHero: Hero;
  banana$: Observable<Hero[]> = this._bananaService.banana$;
  constructor(private _bananaService: BananaService) {
    //this._bananaService.banana$.subscribe( value => { this.banana = value;console.log(this.banana);});
   }
   ngOnInit(){
     setTimeout(() => this._bananaService.changeBanana(HEROES),3000);
   }
   onSelect(hero: Hero): void {
     this.selectedHero = hero;
   }
}
