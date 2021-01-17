import { TestBed } from '@angular/core/testing';

import { StrapConnectionService } from './strap-connection.service';

describe('StrapConnectionService', () => {
  let service: StrapConnectionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StrapConnectionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
