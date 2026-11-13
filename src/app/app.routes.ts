import { Routes } from '@angular/router';
import { SearchPage } from './features/search/search-page/search-page';
import { PlanetDetail } from './features/planet-detail/planet-detail/planet-detail';

export const routes: Routes = [
  { path: '', redirectTo: 'search', pathMatch: 'full' },
  { path: 'search', component: SearchPage },
  { path: 'planet', component: PlanetDetail },
  { path: '**', redirectTo: 'search' },
];
