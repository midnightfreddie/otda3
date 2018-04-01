import { Component, OnInit } from '@angular/core';
import { MapDataService } from '../map-data.service';

@Component({
  selector: 'app-map-svg',
  templateUrl: './map-svg.component.html',
  styleUrls: ['./map-svg.component.css']
})
export class MapSvgComponent implements OnInit {

  constructor(public mapDataService: MapDataService) { }

  ngOnInit() {
  }

}
