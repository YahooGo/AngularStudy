import { TestBed } from '@angular/core/testing';

import { UserserveService } from './userserve.service';

describe('UserserveService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UserserveService = TestBed.get(UserserveService);
    expect(service).toBeTruthy();
  });
});
