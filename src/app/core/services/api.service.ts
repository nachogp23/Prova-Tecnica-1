//Service with method to perfom GET requests to API and return an Observable of Photographer Type Array

//-------------------   START DEPENDENCIES   ----------------
//Import external dependencies
import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

//import internal dependencies
import { Photographer } from '../models/photographer.models';
import { environment } from 'src/environments/environment';
//-------------------   END DEPENDENCIES   ----------------

@Injectable({
  providedIn: 'root'
})

export class ApiService {

//Instance of HttpClient class with methods to perfom HTTP requests
  constructor(
    private httpClient: HttpClient
    ){}

  //Function to perform GET Request poiting to the "apiUrl" param defined at "environemnt.ts" file
  //Return array of Photogarpher type objects as Observable
  public getPhotographers():Observable<Photographer[]> {

   return this.httpClient.get(environment.apiUrl, {

    //Adding to request's headers authorization info comming from environment
    //btoa() method used to Base64 encode username:password
    headers: {
        "Authorization": `Basic ${btoa(environment.apiUser+":"+environment.apiPassword)}`,
        "Accept": 'application/json'
      }
    }) as Observable<Photographer[]>;

  }

}
