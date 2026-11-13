import { Component, computed, inject, signal, OnInit } from '@angular/core';
import { NgbPagination } from '@ng-bootstrap/ng-bootstrap';
import { Exoplanet } from '../../../core/services/exoplanet';
import { PLANET_COLUMNS } from '../../../core/models/planet.model';

@Component({
  imports: [NgbPagination],
  selector: 'app-search-page',
  styleUrl: './search-page.scss',
  templateUrl: './search-page.html',
})
export class SearchPage implements OnInit {
  columns = PLANET_COLUMNS;
  private apiService = inject(Exoplanet);
  planetData = this.apiService.planetData;
  page = signal(1);
  pageSize = 10;

  pagedPlanets = computed(() => {
    const start = (this.page() - 1) * this.pageSize;
    return this.planetData().slice(start, start + this.pageSize);
  });

  ngOnInit(): void {
    this.apiService.load();
  }
}
