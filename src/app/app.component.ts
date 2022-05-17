import { ApiService } from './core/services/api.service';
import { Component } from '@angular/core';
import { Photographer } from './core/models/photographer.models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Prova-Tecnica-1';

  public photographers: Photographer[] = [];

  constructor (
    private apiService: ApiService
  ) {
    console.log("se ejecuta constructor");
    apiService.getPhotographers().subscribe((photographers) => {
      this.photographers = photographers;
    })
   }

   public showResponse() {
    console.log(this.photographers);
  }

}

