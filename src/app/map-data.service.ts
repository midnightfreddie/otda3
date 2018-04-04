import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { MapTile } from '../map';

@Injectable()
export class MapDataService {

  constructor() { }

  width : number;
  height: number;
  mapTiles: MapTile[];

  newMap(): void {
    this.width = 20;
    this.height = 20;
    // FIXME: This should create an array of populated MapTile objects. I'm not sure what it's doing right now.
    this.mapTiles = [...Array(this.width/2*this.height)];
  }

  getTiles(): Observable<MapTile[]> {
    return of(this.mapTiles);
  }

  x(i): number {
    // tile-width * map width, also add half-tile offset to the right for odd rows
    return 128 * (i % (this.width / 2)) + 64 * ( Math.floor(i / (this.width /2)) % 2);
  }
  y(i): number {
      return 32 * Math.floor(i / (this.width / 2));
  }
  moves(i): number[] {
    let destinations = [];
    let x = i % (this.width / 2) * 2;
    let y = Math.floor(i / (this.width / 2));
    if (y % 2 == 1) { x = x + 1 }
    destinations.push(this.addXY(x, y, 2, 0));
    destinations.push(this.addXY(x, y, -2, 0));
    destinations.push(this.addXY(x, y, 1, 1));
    destinations.push(this.addXY(x, y, -1, 1));
    destinations.push(this.addXY(x, y, 1, -1));
    destinations.push(this.addXY(x, y, -1, -1));
    destinations.push(this.addXY(x, y, 0, 2));
    destinations.push(this.addXY(x, y, 0, -2));
    return destinations;
  }
  private addXY (x, y, dx, dy) : number {
    let newI = Math.floor((x + this.width + dx) / 2) % (this.width / 2) +
      Math.floor(this.width / 2) * ((y + this.width + dy) % this.width);
    return newI;
  }
}
