import { TestBed } from '@angular/core/testing';

import { MainBodyControlService } from './main-body-control.service';

describe('MainBodyControlService', () => {
  let service: MainBodyControlService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MainBodyControlService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
