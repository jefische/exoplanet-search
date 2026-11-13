import { Component, inject, signal, OnInit } from '@angular/core';
import { Exoplanet } from '../../../core/services/exoplanet';
import { Planet } from '../../../core/models/planet.model';

@Component({
  imports: [],
  selector: 'app-search-page',
  styleUrl: './search-page.scss',
  templateUrl: './search-page.html',
})
export class SearchPage implements OnInit {
  private apiService = inject(Exoplanet);
  planetData = signal<Planet[]>([]);

  ngOnInit(): void {
    this.apiService.searchPlanets().subscribe({
      next: (data) => this.planetData.set(data),
      error: (err) => console.error('Fetch failed', err),
    });
  }
}
