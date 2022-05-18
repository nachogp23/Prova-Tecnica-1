//-------------------   START DEPENDENCIES   ----------------
//Import external dependencies
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
//import internal dependencies
import { PersistanceService } from 'src/app/core/services/persistance.service';
import { Photographer } from './../../core/models/photographer.models';
//-------------------   END DEPENDENCIES   ----------------

@Component({
  selector: 'app-photographer-detall',
  templateUrl: './photographer-detall.component.html',
  styleUrls: ['./photographer-detall.component.scss'],
})
export class PhotographerDetallComponent implements OnInit {
  //Declaration of numer type constant to save photographer ID
  public photographerId?: number;
  //Declaration of Photographer type Object
  public photographer?: Photographer;

  constructor(
    private route: ActivatedRoute,
    private persistanceService: PersistanceService
  ) {}

  ngOnInit(): void {
    //Save on constant the id comming from route
    this.route.params.subscribe((params) => {
      this.photographerId = +params['id'];
    });
    //Getting single photographer object specified by ID
    this.photographer = this.persistanceService.getDataLocalStorageById(
      'photographers',
      this.photographerId!
    );
  }
}
