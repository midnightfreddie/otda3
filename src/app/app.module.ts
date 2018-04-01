import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { MapSvgComponent } from './map-svg/map-svg.component';
import { MapDataService } from './map-data.service';


@NgModule({
  declarations: [
    AppComponent,
    MapSvgComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    MapDataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
