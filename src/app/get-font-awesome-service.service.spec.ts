import { TestBed } from '@angular/core/testing';

import { GetFontAwesomeServiceService } from './get-font-awesome-service.service';

describe('GetFontAwesomeServiceService', () => {
  let service: GetFontAwesomeServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetFontAwesomeServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
