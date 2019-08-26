import { TestBed } from '@angular/core/testing';

import { MyHttpCllientService } from './my-http-cllient.service';

describe('MyHttpCllientService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MyHttpCllientService = TestBed.get(MyHttpCllientService);
    expect(service).toBeTruthy();
  });
});
