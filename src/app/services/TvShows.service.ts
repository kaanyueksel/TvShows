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
    this.shows.push(new TvShows(1, '4 BLOCKS'));
    this.shows.push(new TvShows(1, 'Game Of Thrones'));
    this.shows.push(new TvShows(1, 'Prison Break'));
    this.shows.push(new TvShows(1, 'Naruto Shippuden'));
    this.shows.push(new TvShows(1, 'Das Serien'));
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

  async detailInfo(show: TvShows) {
    const data = await this.httpClient.get('http://api.tvmaze.com/singlesearch/shows?q=' + show.label).toPromise();
    show.label = data['name'];
    show.img = data['image']['medium'];
    this.detailShow = show;
    console.table(this.detailShow);
  }
}
