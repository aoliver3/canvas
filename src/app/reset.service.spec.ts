import { TestBed, inject } from '@angular/core/testing';

import { ResetService } from './reset.service';

describe('ResetService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ResetService]
    });
  });

  it('should ...', inject([ResetService], (service: ResetService) => {
    expect(service).toBeTruthy();
  }));
});
