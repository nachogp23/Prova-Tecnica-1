import { HttpClientModule} from '@angular/common/http';
import { PersistanceService } from './services/persistance.service';
import { ApiService } from './services/api.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//import { AuthInterceptor } from './interceptors/auth.interceptor';



@NgModule({
  declarations: [],
  providers: [
    ApiService,
    PersistanceService,
  ],
  imports: [
    CommonModule,
    HttpClientModule,

  ]
})
export class CoreModule { }
