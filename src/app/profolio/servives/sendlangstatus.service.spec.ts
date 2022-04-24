import { TestBed } from '@angular/core/testing';

import { SendlangstatusService } from './sendlangstatus.service';

describe('SendlangstatusService', () => {
  let service: SendlangstatusService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SendlangstatusService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
