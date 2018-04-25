import { Component } from '@angular/core';

import { Hero } from './hero';

@Component({
    selector: 'app-root',
    template: `
  <h1>{{title}}</h1>
  <h2>My favorite hero is: {{myHero.name}}</h2>
  <p>Heroes:</p>
  <ul>
    <li *ngFor="let hero of heroes">
      {{ hero.name }}
      </li>
  </ul>
  <button (click)="add()">Add Hero</button>
  <div>
    Number of heroes: <input [value]="heroes.length"/>
  </div>
`
})
export class AppComponent {
    title = 'Tour of Heroes';
    heroes = [
        new Hero(1, 'Windstorm'),
        new Hero(13, 'Bombasto'),
        new Hero(15, 'Magneta'),
        new Hero(20, 'Tornado')
    ];
    myHero = this.heroes[0];

    add() {
        const id = 20 + this.heroes.length;
        this.heroes.push(new Hero(id, 'New Hero'))
    }
}