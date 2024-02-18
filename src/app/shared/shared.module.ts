import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartModule } from 'primeng/chart';
import { ProgressSpinnerModule } from 'primeng/progressspinner';


@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports: [ChartModule, ProgressSpinnerModule]
})
export class SharedModule { }
