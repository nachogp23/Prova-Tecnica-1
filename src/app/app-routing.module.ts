//-------------------   START DEPENDENCIES   ----------------
//Import external dependecies
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//-------------------   END DEPENDENCIES   ----------------

//Definion of paths and Modules for each route
const routes: Routes = [
  //Route for photographers-list page
  {
    path: '',
    pathMatch: 'full',
    loadChildren: () => import('src/app/pages/photographers-list/photographers-list.module').then(m => m.PhotographersListModule),
  },
  //Route for photographers-detail page
  {
    path: ':id',
    loadChildren: () => import('src/app/pages/photographer-detall/photographer-detall.module').then(m => m.PhotographerDetallModule),
  },

  //Route for Error Page
  // {
  //   path: '*',
  //   loadChildren: () => import('').then(m => m.),
  // },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
