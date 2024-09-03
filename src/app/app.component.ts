import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {SearchGeoComponent} from "./search-geo/search-geo.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SearchGeoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'cityshob-app';
}
