import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FurmanComponent } from './furman/furman.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [FurmanComponent],
  exports: [FurmanComponent]
})
export class DavidModule { }
