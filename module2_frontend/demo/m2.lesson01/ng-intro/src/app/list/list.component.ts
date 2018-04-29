import { Component } from '@angular/core';
import { CarService } from '../car.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent  {
  newCarName = '';
  cars = [
    'Mazda',
    'Fiat',
    'BMW'
  ];
  constructor(private carService: CarService) { }

  // ngOnInit() {
  // }

  updateName(e) {
    this.newCarName = e.target.value;
  }
  addCar() {
    this.carService.addCar(this.newCarName);
    this.cars.push(this.newCarName);
  }
}
