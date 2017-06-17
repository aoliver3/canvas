import { TestBed, inject } from '@angular/core/testing';

import { ColorSelectionService } from './color-selection.service';

describe('ColorServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ColorSelectionService]
    });
  });

  it('should ...', inject([ColorSelectionService], (service: ColorSelectionService) => {
    expect(service).toBeTruthy();
  }));
});
