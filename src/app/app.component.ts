//-------------------   START DEPENDENCIES   ---------------
//Import external dependencies
import { Component } from '@angular/core';
//Import internal dependencies
import { BrainService } from './core/services/brain.service';
//-------------------   END DEPENDENCIES   ----------------
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Prova-Tecnica-1';

  //Start App poblating Local Storage with Api Data
  constructor (private brain: BrainService)
  {
    this.brain.startApp();
  }

}



