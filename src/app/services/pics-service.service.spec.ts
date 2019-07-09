import { TestBed } from '@angular/core/testing';

import { PicsServiceService } from './pics-service.service';

describe('PicsServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PicsServiceService = TestBed.get(PicsServiceService);
    expect(service).toBeTruthy();
  });
});
