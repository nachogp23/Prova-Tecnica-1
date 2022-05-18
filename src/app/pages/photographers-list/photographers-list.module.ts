import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PhotographersListRoutingModule } from './photographers-list-routing.module';
import { PhotographersListComponent } from './photographers-list.component';

@NgModule({
  declarations: [
    PhotographersListComponent
  ],
  imports: [
    CommonModule,
    PhotographersListRoutingModule
  ]
})
export class PhotographersListModule { }
