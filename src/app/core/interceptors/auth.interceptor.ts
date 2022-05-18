//-------------------   START DEPENDENCIES   ----------------
//Import external dependencies
import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
//Import internal dependencies
import { environment } from 'src/environments/environment';
//-------------------   END DEPENDENCIES   ----------------

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor() {}

  //Add headers required for Basic Authorization to all HTTP requests
  //btoa() method used to Base64 encode username:password credentrials comming from environment
  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    request = request.clone({
      setHeaders: {
        Authorization: `Basic ${btoa(environment.apiUser + ":" + environment.apiPassword)}`,
        Accept: "application/json"
      }
    });
    return next.handle(request);
  }
}
