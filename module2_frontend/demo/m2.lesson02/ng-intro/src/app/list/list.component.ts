import { Component } from '@angular/core';
import { CarService } from '../car.service';

@Component({
  selector: 'app-list',
  template: `
    <ul>
      <li *ngFor="let car of cars">
        {{ car }}
      </li>
    </ul>

  `,
  styleUrls: ['./list.component.css']
})
export class ListComponent  {
  cars = [];
  // cars = [
  //   'Mazda',
  //   'Fiat',
  //   'BMW'
  // ];
  constructor(private carService: CarService) {
    this.cars  = carService.cars;
  }
}
