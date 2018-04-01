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
}
