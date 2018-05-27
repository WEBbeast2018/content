import { Component } from '@angular/core';
import { CarService } from './car.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  newCarName = '';
  constructor(private carService: CarService) {
  }

  updateName(e) {
    this.newCarName = e.target.value;
  }

  addCar() {
    this.carService.addCar(this.newCarName);
  }
}
