//Import external dependencies
import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

//import internal dependencies
import { Photographer } from '../models/photographer.models';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    private httpClient: HttpClient ) {}


  public getPhotographers():Observable<Photographer[]> {


    return this.httpClient.get(environment.apiUrl, {

      headers: {

        //"Access-Control-Allow-Origin": "*",
        "Authorization": `Basic ${btoa("test@gmail.com:1234")}`,
        "Accept": 'application/json'
      }
    }) as Observable<Photographer[]>;

  }

}
