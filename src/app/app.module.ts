//-------------------   START DEPENDENCIES   ---------------
//Import external dependencies
import { CoreModule } from './core/core.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//Import internal dependencies
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//-------------------   END DEPENDENCIES   ----------------
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
