import { TestBed, inject } from '@angular/core/testing';

import { MovieApiService } from './movie-api.service';

describe('MovieApiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MovieApiService]
    });
  });

  it('should ...', inject([MovieApiService], (service: MovieApiService) => {
    expect(service).toBeTruthy();
  }));
});
