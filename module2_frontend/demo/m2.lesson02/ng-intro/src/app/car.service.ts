import { Injectable } from '@angular/core';

@Injectable()
export class CarService {

  constructor() { }
  cars: string[] = []; // capture logs for testing

  addCar(carName: string) {
    this.cars.push(carName);
    console.log(carName);
  }
}
