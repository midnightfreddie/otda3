import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { MapSvgComponent } from './map-svg/map-svg.component';
import { MapDataService } from './map-data.service';
import { UnitDataService } from './unit-data.service';


@NgModule({
  declarations: [
    AppComponent,
    MapSvgComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    MapDataService,
    UnitDataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
