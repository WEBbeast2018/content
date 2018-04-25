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
  <div>
    <button (click)="generate()">Generate</button>
    <button (click)="clear()">Clear</button>
    <button (click)="add()">Add Hero</button>
    <input [value]="newHeroName" (input)="newHeroName = $event.target.value" placeholder="Enter Hero Name"/>
  </div>
  <div>
    Number of heroes: {{heroes.length}}
  </div>
`
})
export class AppComponent {
    newHeroName = '';
    title = 'Tour of Heroes';
    heroes = [
        new Hero(1, 'Windstorm'),
        new Hero(13, 'Bombasto'),
        new Hero(15, 'Magneta'),
        new Hero(20, 'Tornado')
    ];
    myHero = this.heroes[0];

    add() {
        if(this.newHeroName.length > 0) {
            const id = 20 + this.heroes.length;
            this.heroes.push(new Hero(id, this.newHeroName))
        }
    }

    clear() {
        this.newHeroName = '';
    }

    generate() {
        if(Math.random() < .5) {
            this.newHeroName = 'HackerMan';
        } else {
            this.newHeroName = 'The Hebrew Hammer';
        }
    }
}