import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MissionControlComponent } from './mission.control.component';
import { AstronautComponent } from './astronaut.component';
import { MissionService} from './mission.service'

@NgModule({
  declarations: [
    AppComponent,
    MissionControlComponent,
    AstronautComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [MissionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
