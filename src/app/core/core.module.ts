//-------------------   START DEPENDENCIES   ----------------
//Import external dependencies
import { HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//import internal dependencies
import { AuthInterceptor } from './interceptors/auth.interceptor';
import { BrainService } from './services/brain.service';
import { PersistanceService } from './services/persistance.service';
import { ApiService } from './services/api.service';
//-------------------   END DEPENDENCIES   ----------------

@NgModule({
  declarations: [],
  providers: [
    ApiService,
    PersistanceService,
    BrainService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    },
  ],
  imports: [
    CommonModule,
    HttpClientModule,

  ]
})
export class CoreModule { }
