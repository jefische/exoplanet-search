import { TestBed } from '@angular/core/testing';
import { Exoplanet } from './exoplanet';

describe('Exoplanet', () => {
  let service: Exoplanet;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Exoplanet);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
