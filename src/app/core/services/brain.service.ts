//-------------------   START DEPENDENCIES   --------------
//Import external dependencies
import { Injectable } from '@angular/core';
//Import internal dependencies
import { ApiService } from './api.service';
import { PersistanceService } from './persistance.service';
import { Photographer } from '../models/photographer.models';
//-------------------   END DEPENDENCIES   ----------------

@Injectable({
  providedIn: 'root',
})
export class BrainService {
  public photographers: Photographer[] = [];

  constructor(
    private apiService: ApiService,
    private persistanceService: PersistanceService
  ) {}

  //Get Data from Api and save it on Local Storage
  public startApp() {
    this.apiService.getDataApi().subscribe((photographers) => {
      this.persistanceService.writeData('photographers', photographers.results);
    });
  }
}
