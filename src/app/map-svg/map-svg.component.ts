import { Component, OnInit } from '@angular/core';
import { MapDataService } from '../map-data.service';
import { MapTile } from '../../map';

@Component({
  selector: 'app-map-svg',
  templateUrl: './map-svg.component.html',
  styleUrls: ['./map-svg.component.css']
})
export class MapSvgComponent implements OnInit {

  constructor(public mapDataService: MapDataService) { }

  ngOnInit() {
    this.mapDataService.newMap();
    this.mapDataService.getTiles()
      .subscribe(tiles => this.tiles = tiles)
  }

  tiles: MapTile[];
  x(i): number {
    return this.mapDataService.x(i);
  }
  y(i): number {
    return this.mapDataService.y(i);
  }
}
