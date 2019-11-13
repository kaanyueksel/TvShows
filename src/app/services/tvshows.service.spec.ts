import { TestBed } from '@angular/core/testing';

import { TvShowsService } from './TvShows.service';

describe('TvShowsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TvShowsService = TestBed.get(TvShowsService);
    expect(service).toBeTruthy();
  });
});
