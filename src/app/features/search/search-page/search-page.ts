import { Component, computed, inject, signal, OnInit } from '@angular/core';
import { NgbPagination } from '@ng-bootstrap/ng-bootstrap';
import { Exoplanet } from '../../../core/services/exoplanet';
import { PLANET_COLUMNS, SearchCriteria } from '../../../core/models/planet.model';
import { SearchForm } from '../search-form/search-form';

@Component({
  imports: [SearchForm, NgbPagination],
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

  criteria = signal<SearchCriteria | null>(null);

  filteredPlanets = computed(() => {
    const c = this.criteria();
    const planets = this.planetData();
    if (!c) return planets;

    return planets.filter(
      (p) =>
        (!c.name ||
          p.pl_name.toLowerCase().includes(c.name.toLowerCase()) ||
          p.hostname.toLowerCase().includes(c.name.toLowerCase())) &&
        (c.minYear == null || p.disc_year >= c.minYear) &&
        (c.maxYear == null || p.disc_year <= c.maxYear) &&
        (!c.method || p.discoverymethod === c.method),
    );
  });

  onSearch(c: SearchCriteria) {
    this.criteria.set(c);
    this.page.set(1);
  }

  pagedPlanets = computed(() => {
    const start = (this.page() - 1) * this.pageSize;
    return this.filteredPlanets().slice(start, start + this.pageSize);
  });

  ngOnInit(): void {
    this.apiService.load();
  }
}
