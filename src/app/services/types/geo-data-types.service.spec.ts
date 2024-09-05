import { TestBed } from '@angular/core/testing';

import { GeoDataTypesService } from './geo-data-types.service';

describe('GeoDataTypesService', () => {
  let service: GeoDataTypesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GeoDataTypesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
