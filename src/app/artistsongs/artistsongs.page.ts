import { SongsdetailPage } from './../songsdetail/songsdetail.page';
import { Component, OnInit } from '@angular/core';
import { SongsServices } from '../services/songs.services';
import { Router } from '@angular/router';

@Component({
  selector: 'app-artistsongs',
  templateUrl: './artistsongs.page.html',
  styleUrls: ['./artistsongs.page.scss'],
})
export class ArtistsongsPage implements OnInit {
  song: any;
  constructor(private songsServices: SongsServices, private route: Router) { }

  ngOnInit() {
    if (this.songsServices.artistList.length < 0) {
      this.route.navigate(['./tab1']);
    } else {
      console.log(this.songsServices.artistList);
      this.song = this.songsServices.artistList;
    }
  }
  // Item Selected
  songSelected(songs: any) {
    this.songsServices.songItem = songs;
    this.route.navigate(['./songsdetail']);
  }
}
