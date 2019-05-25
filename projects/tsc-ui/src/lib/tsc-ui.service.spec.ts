import { TestBed } from '@angular/core/testing';

import { TscUiService } from './tsc-ui.service';

describe('TscUiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TscUiService = TestBed.get(TscUiService);
    expect(service).toBeTruthy();
  });
});
