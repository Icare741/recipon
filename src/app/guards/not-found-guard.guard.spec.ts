import { TestBed } from '@angular/core/testing';

import { NotFoundGuard } from './not-found-guard.guard';

describe('NotFoundGuardGuard', () => {
  let guard: NotFoundGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(NotFoundGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
