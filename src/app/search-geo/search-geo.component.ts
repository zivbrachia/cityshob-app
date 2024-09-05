import {Component, OnInit} from '@angular/core';
import {MultiSelectModule} from "primeng/multiselect";
import {FormsModule} from "@angular/forms";
import {CardModule} from "primeng/card";
import {AccordionModule} from "primeng/accordion";
import {BadgeModule} from "primeng/badge";
import {CheckboxModule} from "primeng/checkbox";
import {GeoDataSensorsService} from "../services/sensors/geo-data.service";
import {HttpClientModule} from "@angular/common/http";
import {GeoDataTypesService} from "../services/types/geo-data-types.service";
import {CommonModule, KeyValuePipe} from "@angular/common";

interface Type {
  _id: string
  name: string,
}

interface Sensor {
  name: string;
  connectionState?: string;
}

interface SubType {
  name: string;
  sensors: Sensor[];
}

interface TypeData {
  name: string;
  subType: {
    [key: string]: SubType;
  };
}

interface SensorsData {
  [key: string]: TypeData;
}

interface SensorItem {
  "_id": string,
  "name": string,
  "connectionState"?: string,
  "type": {
    "_id": string,
    "name": string,
  },
  "subType": {
    "_id": string,
    "name": string,
  },
  "sensorType": {
    "_id": string,
    "name": string,
  }
}

interface SensorMap {
  [key: string]: { name: string, subType: { [key: string]: { name: string, sensors: [] } } }
}

@Component({
  selector: 'app-search-geo',
  standalone: true,
  imports: [
    CommonModule,
    HttpClientModule,
    MultiSelectModule,
    FormsModule,
    CardModule,
    AccordionModule,
    BadgeModule,
    CheckboxModule,
    KeyValuePipe,
  ],
  templateUrl: './search-geo.component.html',
  styleUrl: './search-geo.component.css'
})
export class SearchGeoComponent implements OnInit {
  selectedTypes!: Type[];
  searchText?: string;

  isChecked = false;

  sensorsData: SensorsData = {};
  typesData: Type[] = [];

  constructor(private geoDataSensorsService: GeoDataSensorsService, private geoDataTypesService: GeoDataTypesService) {
    this.selectedTypes = [];
  }

  ngOnInit() {
    // Fetch data from the service when the component initializes
    this.geoDataTypesService.getTypes().subscribe({
      next: (data) => {
        this.typesData = data.data; // Assuming your data structure has a 'data' field
        console.log('Fetched types:', this.typesData); // Debug: Check fetched data
      },
      error: (err) => console.error('Failed to fetch types:', err) // Handle errors
    });

    this.searchSensors();
  }

  _() {
    // Handle minimize action
    console.log('_');
  }

  private getSelectedTypes(): string[] {
    return this.selectedTypes.map((type) => type._id) || [];
  }

  private searchSensors() {
    const typeIds = this.getSelectedTypes();

    console.log(this.searchText);
    this.geoDataSensorsService.getSensors(typeIds, this.searchText).subscribe({
      next: (data) => {
        this.sensorsData = data.data
          .reduce((accumulator: any, currentValue: SensorItem) => {
            const {
              name,
              connectionState,
              type: { _id: typeId, name: typeName },
              subType: { _id: subTypeId, name: subTypeName },
              sensorType: { _id: sensorTypeId },
            } = currentValue;

            accumulator[typeId] = accumulator[typeId] ?? {name: typeName, subType: {}};
            accumulator[typeId].subType[subTypeId] = accumulator[typeId].subType[subTypeId] ?? {name: subTypeName, sensors: []};
            accumulator[typeId].subType[subTypeId].sensors.push({name, connectionState});

            return accumulator;
          }, {});
        console.log('Fetched sensors:', this.sensorsData); // Debug: Check fetched data
      },
      error: (err) => console.error('Failed to fetch sensors:', err) // Handle errors
    });
  }

  onSelectionChange() {
    this.searchSensors();
  }

  onSearchInput($event: Event) {
    const input = $event.target as HTMLInputElement;
    this.searchText = input.value;

    this.searchSensors();
  }
}
