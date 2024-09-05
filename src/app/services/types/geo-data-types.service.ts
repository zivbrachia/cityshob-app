import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class GeoDataTypesService {
  private apiUrl = 'http://localhost:3000/types'; // Your endpoint URL
  constructor(private http: HttpClient) { }

  getTypes(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
}
