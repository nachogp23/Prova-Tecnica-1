//-------------------   START DEPENDENCIES   --------------
//Import external dependencies
import { Injectable } from '@angular/core';
//Import internal dependencies
import { Photographer } from '../models/photographer.models';
//-------------------   END DEPENDENCIES   ----------------
@Injectable({
  providedIn: 'root'
})
export class PersistanceService {

  constructor() { }

  //Function to write data on Local Storage
  //"key" and "data" params indicates the key and value that we want to saving
  public writeData(key: string, data: Photographer[]) {
    const itemsToSave = JSON.stringify(data)
    localStorage.setItem(key, itemsToSave);
  }

  //Function to read and get data from Loca Storage
  //The "key" parame indicates the value's key we want to get
  public getDataLocalStorage(key: string) {
    const itemReaded = localStorage.getItem(key);
    return itemReaded ? JSON.parse(itemReaded) : null;
  }

  //Function to obtain one specific element from Local Storage
  //The "key" parame indicates the value's key we want to get
  //The "id" param specifies the object we want to obtain
  public getDataLocalStorageById(key: string, id: number) {
    const itemReaded = this.getDataLocalStorage(key);
    return itemReaded.find(
      (item: Photographer) => item.id === id
    );

  }

}
