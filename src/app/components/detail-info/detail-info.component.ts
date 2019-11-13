import { Component, OnInit } from '@angular/core';
import {TvShowsService} from '../../services/TvShows.service';

@Component({
  selector: 'app-detail-info',
  templateUrl: './detail-info.component.html',
  styleUrls: ['./detail-info.component.css']
})
export class DetailInfoComponent implements OnInit {

  constructor(private service: TvShowsService) { }

  ngOnInit() {
  }

  get show() {
    return this.service.detailShow;
  }

}
