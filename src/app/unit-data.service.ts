import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { Unit } from '../unit';

@Injectable()
export class UnitDataService {

  constructor() { }

  units: Unit[];

  getUnits(): Observable<Unit[]> {
    return of(this.units);
  }

  spawnUnit(): void {
    if (typeof this.units == 'undefined') {
      this.units = [];
    }
    let unit = new Unit;
    unit.health = 2;
    unit.rank = 2;
    this.moveUnit(unit);
    this.units.push(unit);
    console.log(unit);
    console.log(this.units);
  }

  moveUnit(unit: Unit): void {
    unit.i = Math.floor(Math.random() * 200); // FIXME: hard-coded map tile index size
  }
}