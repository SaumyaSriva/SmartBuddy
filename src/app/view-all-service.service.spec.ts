import { TestBed } from '@angular/core/testing';

import { ViewAllServiceService } from './view-all-service.service';

describe('ViewAllServiceService', () => {
  let service: ViewAllServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ViewAllServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
