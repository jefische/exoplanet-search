import { Service, inject, signal } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { finalize, Observable } from 'rxjs';
import { Planet, PLANET_COLUMNS } from '../models/planet.model';

@Service()
export class Exoplanet {
  private http = inject(HttpClient);
  private baseUrl = '/TAP/sync';

  planetData = signal<Planet[]>([]);
  loading = signal(false);

  searchPlanets(): Observable<any> {
    const query: string = `select ${PLANET_COLUMNS.join(', ')} from pscomppars`;
    const params = new HttpParams().set('query', query).set('format', 'json');
    return this.http.get<any>(`${this.baseUrl}`, { params });
  }

  load(): void {
    if (this.planetData().length > 0 || this.loading()) return;

    this.loading.set(true);

    this.searchPlanets()
      .pipe(finalize(() => this.loading.set(false)))
      .subscribe({
        next: (data) => this.planetData.set(data),
        error: (err) => console.error('Fetch failed', err),
      });
  }
}
