import { Component } from '@angular/core';
import {MultiSelectModule} from "primeng/multiselect";

interface City {
  name: string,
  code: string
}

@Component({
  selector: 'app-search-geo',
  standalone: true,
  imports: [
    MultiSelectModule
  ],
  templateUrl: './search-geo.component.html',
  styleUrl: './search-geo.component.css'
})
export class SearchGeoComponent {
  cities!: City[];

  selectedCities!: City[];

  constructor() {
    this.cities = [
      {name: 'New York', code: 'NY'},
      {name: 'Rome', code: 'RM'},
      {name: 'London', code: 'LDN'},
      {name: 'Istanbul', code: 'IST'},
      {name: 'Paris', code: 'PRS'}
    ];
  }
}
