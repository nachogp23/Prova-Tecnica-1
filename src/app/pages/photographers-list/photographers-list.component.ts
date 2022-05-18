//-------------------   START DEPENDENCIES   ----------------
//Import external dependencies
import { Component, OnInit } from '@angular/core';
//import internal dependencies
import { PersistanceService } from 'src/app/core/services/persistance.service';
import { Photographer } from './../../core/models/photographer.models';
//-------------------   END DEPENDENCIES   ----------------

@Component({
  selector: 'app-photographers-list',
  templateUrl: './photographers-list.component.html',
  styleUrls: ['./photographers-list.component.scss']
})

export class PhotographersListComponent implements OnInit {
  //Declaration and initialization of an empty Photographer type Array
  public photographers: Photographer [] = [];
  //Declaration of variables to display date: hour + day + month + year
  public hour:number = new Date().getHours();
  public day:number = new Date().getDay();
  public month:number = new Date().getMonth();
  public year:number = new Date().getFullYear();

  constructor(
    private persistanceService: PersistanceService
  ) { }

  //When the component inits we get all protographers from Local Storage as an Array of Objects
  ngOnInit(): void {
    this.photographers = this.persistanceService.getDataLocalStorage("photographers");
  }

}
