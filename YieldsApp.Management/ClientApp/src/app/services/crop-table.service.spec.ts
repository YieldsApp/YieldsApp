import { TestBed } from '@angular/core/testing';

import { CropTableService } from './crop-table.service';

describe('CropTableService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CropTableService = TestBed.get(CropTableService);
    expect(service).toBeTruthy();
  });
});
