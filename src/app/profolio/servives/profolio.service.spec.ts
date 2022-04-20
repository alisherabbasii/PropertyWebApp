import { TestBed } from '@angular/core/testing';

import { ProfolioService } from './profolio.service';

describe('ProfolioService', () => {
  let service: ProfolioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProfolioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
