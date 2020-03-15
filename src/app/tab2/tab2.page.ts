import { Router } from '@angular/router';
import { SongsServices } from '../services/songs.services';
import { Component, OnInit, NgModule } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  songs: any;
  filterSongs: any;
  constructor(private songsServices: SongsServices, private route: Router) {}

  ngOnInit() {
    this.songsServices.getSongsArtistList().subscribe(
      result => {
        this.songs = result;
        this.filterSongs = this.songs;
        console.log(this.songs);
      },
      error => {
        console.log('There is an error');
      }
    );
  }

  onInput($event) {
    const searchbar = $event.target.value;
    this.songs = this.filterSongs;
    if (searchbar && searchbar.trim() != '') {
      this.songs = this.filterSongs.filter((item) => {
        return (item.artist.toLowerCase().indexOf(searchbar.toLowerCase()) > -1);
      });
    }
  }

  artistSelected(item: any) {
    console.log(item.artist);
    this.songsServices.getSongsListArtist(item.artist).subscribe(
      result => {
        this.songsServices.artistList = result;
        this.route.navigate(['./artistsongs']);
      },
      error => {
        console.log('There is an error');
      }
    );
  }
}
