import { Component, OnInit } from '@angular/core';
import { MapDataService } from '../map-data.service';
import { MapTile } from '../../map';
import { Unit } from '../../unit';
import { UnitDataService } from '../unit-data.service';
import { Observable, interval } from 'rxjs'; // FIXME: temp logic in component

@Component({
  selector: 'app-map-svg',
  templateUrl: './map-svg.component.html',
  styleUrls: ['./map-svg.component.css']
})
export class MapSvgComponent implements OnInit {

  tiles: MapTile[];
  units: Unit[];

  constructor(public mapDataService: MapDataService, public unitDataService: UnitDataService) { }

  ngOnInit() {
    this.mapDataService.newMap();
    this.mapDataService.getTiles()
      .subscribe(tiles => this.tiles = tiles);
    this.unitDataService.spawnUnit();
    this.unitDataService.spawnUnit();
    this.unitDataService.spawnUnit();
    this.unitDataService.getUnits()
      .subscribe(units => this.units = units);
    // FIXME: temp interval to move units around
    const t = interval(500);
    t.subscribe(i => this.moveUnit(this.units[i % this.units.length]));
  }

  x(i): number {
    return this.mapDataService.x(i);
  }
  y(i): number {
    return this.mapDataService.y(i);
  }
  moveUnit(unit): void {
    // this.unitDataService.moveUnit(unit);
    const moves = this.mapDataService.moves(unit.i);
    unit.i = moves[Math.floor(Math.random() * moves.length)];
  }
}
