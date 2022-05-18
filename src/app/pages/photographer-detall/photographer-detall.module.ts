import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PhotographerDetallRoutingModule } from './photographer-detall-routing.module';
import { PhotographerDetallComponent } from './photographer-detall.component';


@NgModule({
  declarations: [
    PhotographerDetallComponent
  ],
  imports: [
    CommonModule,
    PhotographerDetallRoutingModule
  ]
})
export class PhotographerDetallModule { }
