import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class GeoDataSensorsService {
  private apiUrl = 'http://localhost:3000/sensors'; // Your endpoint URL
  constructor(private http: HttpClient) { }

  getSensors(types?: string[], freeText?: string): Observable<any> {
    const query: string[] = [];
    if (types?.length) {
      query.push(`types=${types.join(',')}`);
    }
    if (freeText?.length) {
      query.push(`freeText=${freeText}`);
    }
    const url = `${this.apiUrl}?${query.join('&')}`
    return this.http.get<any>(url);
  }
}
