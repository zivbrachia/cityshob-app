import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {SearchGeoComponent} from "./search-geo/search-geo.component";
import {HttpClientModule} from "@angular/common/http";
import {CommonModule} from "@angular/common";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HttpClientModule, SearchGeoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'cityshob-app';
}
