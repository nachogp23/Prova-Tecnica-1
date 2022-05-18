
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PhotographerDetallComponent } from './photographer-detall.component';


const routes: Routes = [
  {
    path: "",
    component: PhotographerDetallComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PhotographerDetallRoutingModule { }
