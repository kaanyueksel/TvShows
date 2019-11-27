import { Injectable } from '@angular/core';
import {TvShows} from '../modules/TvShows';
import {HttpClient} from '@angular/common/http';
import {AngularFirestore} from '@angular/fire/firestore';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TvShowsService {

  private shows: Observable<any>;
  detailShow: TvShows;

  constructor(private httpClient: HttpClient, private af: AngularFirestore) {
  this.shows = af.collection('shows').valueChanges({idField: 'id'});
  }

  get tvShows(): Observable<TvShows[]> {
    return this.shows;
  }

  del(show: TvShows) {
    this.af.collection('shows').doc(show.id).delete();
   // this.shows = this.shows.filter(t => t !== game);
  }
  async save(id: number, label: string) {
    try {
      const data = await this.httpClient.get('http://api.tvmaze.com/singlesearch/shows?q=' + label).toPromise();label = data['name'];
      label = data['name'];
      this.af.collection('shows').add({
        label: label,
      });
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
