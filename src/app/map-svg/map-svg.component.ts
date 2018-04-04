import { Component, OnInit } from '@angular/core';
import { MapDataService } from '../map-data.service';
import { MapTile } from '../../map';
import { Unit } from '../../unit';
import { UnitDataService } from '../unit-data.service';

@Component({
  selector: 'app-map-svg',
  templateUrl: './map-svg.component.html',
  styleUrls: ['./map-svg.component.css']
})
export class MapSvgComponent implements OnInit {

  constructor(public mapDataService: MapDataService, public unitDataService: UnitDataService) { }

  ngOnInit() {
    this.mapDataService.newMap();
    this.mapDataService.getTiles()
      .subscribe(tiles => this.tiles = tiles);
    this.unitDataService.spawnUnit();
    this.unitDataService.getUnits()
      .subscribe(units => this.units = units);
  }

  tiles: MapTile[];
  units: Unit[];

  x(i): number {
    return this.mapDataService.x(i);
  }
  y(i): number {
    return this.mapDataService.y(i);
  }
  moveUnit(unit): void {
    // this.unitDataService.moveUnit(unit);
    let moves = this.mapDataService.moves(unit.i);
    unit.i = moves[Math.floor(Math.random() * moves.length)];
  }
}
