import { Injectable } from '@angular/core';
import {TvShows} from '../modules/TvShows';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TvShowsService {

  private shows: TvShows[] = [];
  detailShow: TvShows;

  constructor(private httpClient: HttpClient) {
    this.shows.push(new TvShows(1, 'Bulldogs'));
    this.shows.push(new TvShows(2, 'Disjointed'));
    this.shows.push(new TvShows(3, 'Atypical'));
    this.shows.push(new TvShows(4, 'Blacklist'));
    this.shows.push(new TvShows(5, 'Breaking Bad'));
  }

  get tvShows() {
    return this.shows;
  }

  del(game: TvShows) {
    this.shows = this.shows.filter(t => t !== game);
  }
  async save(id: number, label: string) {
    try {
      const data = await this.httpClient.get('http://api.tvmaze.com/singlesearch/shows?q=' + label).toPromise();label = data['name'];
      show.label = data['name'];
      this.shows.push(new TvShows(id, label));
    } catch (e) {
      alert('Falsche Eingabe!');
    }
  }

  async detailInfo(show: TvShows) {
    const data = await this.httpClient.get('http://api.tvmaze.com/singlesearch/shows?q=' + show.label).toPromise();
    show.label = data['name'];
    show.img = data['image']['medium'];
    this.detailShow = show;
    console.table(this.detailShow);
  }
}
