import { TestBed } from '@angular/core/testing';

import { CashondeliveryService } from './cashondelivery.service';

describe('CashondeliveryService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CashondeliveryService = TestBed.get(CashondeliveryService);
    expect(service).toBeTruthy();
  });
});
