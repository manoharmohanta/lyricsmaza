import { Component } from '@angular/core';
import { SongsServices } from '../services/songs.services';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  songs: any;
  filterSongs: any;
  constructor(private songsServices: SongsServices,
              public  sanitizer: DomSanitizer) {}

  ngOnInit() {
    this.songsServices.getSongsYoutubeList().subscribe(
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
        return (item.title.toLowerCase().indexOf(searchbar.toLowerCase()) > -1 ||
        item.album.toLowerCase().indexOf(searchbar.toLowerCase()) > -1 ||
        item.artist.toLowerCase().indexOf(searchbar.toLowerCase()) > -1);
      });
    }
  }

}
