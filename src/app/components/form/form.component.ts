import { Component, OnInit } from '@angular/core';
import {TvShows} from '../../modules/TvShows';
import {TvShowsService} from '../../services/TvShows.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  public id: number;
  public label: string;
  public genre: string;
  public fsk: number;



  constructor(public service: TvShowsService) {

  }

  ngOnInit() {
  }

  save() {
    this.service.save(this.id, this.label, this.genre, this.fsk);
  }
}
