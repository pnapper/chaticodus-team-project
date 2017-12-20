import { TestBed, inject } from '@angular/core/testing';

import { MusicApiService } from './music-api.service';

describe('MusicApiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MusicApiService]
    });
  });

  it('should ...', inject([MusicApiService], (service: MusicApiService) => {
    expect(service).toBeTruthy();
  }));
});
