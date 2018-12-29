import { TestBed } from '@angular/core/testing';

import { FarmTableService } from './farm-table.service';

describe('FarmTableService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FarmTableService = TestBed.get(FarmTableService);
    expect(service).toBeTruthy();
  });
});
