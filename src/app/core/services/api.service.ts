//Service with method to perfom GET requests to API and return an Observable

//-------------------   START DEPENDENCIES   ----------------
//Import external dependencies
import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
//import internal dependencies
import { environment } from 'src/environments/environment';
//-------------------   END DEPENDENCIES   ----------------
@Injectable({
  providedIn: 'root'
})

export class ApiService {

  constructor(
    //Instance of HttpClient class with methods to perfom HTTP requests
    private httpClient: HttpClient
    ) {}

  //Function to perform GET Request poitting to the "apiUrl" param defined at environment file
  //Return array of objects as Observable
  public getDataApi():Observable<any> {
   return this.httpClient.get(environment.apiUrl) as Observable<any>;
  }

}
