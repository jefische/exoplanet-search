import { Service, inject } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PLANET_COLUMNS } from '../models/planet.model';

@Service()
export class Exoplanet {
  private http = inject(HttpClient);

  private baseUrl = '/TAP/sync';

  searchPlanets(): Observable<any> {
    const query: string = `select ${PLANET_COLUMNS.join(', ')} from pscomppars`;
    const params = new HttpParams().set('query', query).set('format', 'json');
    return this.http.get<any>(`${this.baseUrl}`, { params });
  }
}
