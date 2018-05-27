import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';
import { CarService } from './car.service';
import { DavidModule } from './david/david.module';


@NgModule({
  declarations: [
    AppComponent,
    ListComponent
  ],
  imports: [
    BrowserModule,
    DavidModule
  ],
  providers: [CarService],
  bootstrap: [AppComponent]
})
export class AppModule { }
