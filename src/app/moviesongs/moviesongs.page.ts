import { Tab4Page } from './../tab4/tab4.page';
import { Component, OnInit } from '@angular/core';
import { SongsServices } from '../services/songs.services';
import { Router } from '@angular/router';

@Component({
  selector: 'app-moviesongs',
  templateUrl: './moviesongs.page.html',
  styleUrls: ['./moviesongs.page.scss'],
})
export class MoviesongsPage implements OnInit {
  song: any;
  constructor(private songsServices: SongsServices, private route: Router) { }

  ngOnInit() {
    // console.log(this.songsServices.albumList);
    if (this.songsServices.albumList.length < 0) {
      this.route.navigate(['./tab1']);
    } else {
      this.song = this.songsServices.albumList;
    }
  }
   // Item Selected
   songSelected(songs: any) {
    this.songsServices.songItem = songs;
    this.route.navigate(['./songsdetail']);
  }
}
