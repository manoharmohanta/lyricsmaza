import { SongsServices } from './../services/songs.services';
import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  songs: any;
  filterSongs: any;
  SongsdetailPage: any;
  songItem: any;
  constructor(private songsServices: SongsServices, private route: Router) {
    this.ngOnInit();
  }

  ngOnInit() {
    this.songsServices.getSongsDate('20190323').subscribe(
      result => {
        this.songs = result;
        this.filterSongs = this.songs;
      },
      error => {
        console.log('There is an error');
      }
    );
  }

  // Search
  onInput($event) {
    const searchbar = $event.target.value;
    this.songs = this.filterSongs;
    if (searchbar && searchbar.trim() != '') {
      this.songs = this.filterSongs.filter((item) => {
        return (item.title.toLowerCase().indexOf(searchbar.toLowerCase()) > -1 ||
        item.album.toLowerCase().indexOf(searchbar.toLowerCase()) > -1 ||
        item.artist.toLowerCase().indexOf(searchbar.toLowerCase()) > -1);
      });
    }
  }

  // Item Selected
  songSelected(songs: any) {
    console.log(songs);
    this.songsServices.songItem = songs;
    this.route.navigate(['./songsdetail']);
  }
}
