import { Injectable } from '@angular/core';
import {TvShows} from '../modules/TvShows';

@Injectable({
  providedIn: 'root'
})
export class TvShowsService {

  private shows: TvShows[] = [];

  constructor() {
    this.shows.push(new TvShows(1, '4 BLOCKS'));
    this.shows.push(new TvShows(1, 'Skylines'));
    this.shows.push(new TvShows(1, 'Prison Break'));
    this.shows.push(new TvShows(1, 'Türkisch für Anfänger'));
  }

  get tvShows() {
    return this.shows;
  }

  del(game: TvShows) {
    this.shows = this.shows.filter(t => t !== game);
  }
  save(id: number, label: string) {
    this.shows.push(new TvShows(id, label));
  }
}
