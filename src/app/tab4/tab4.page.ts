import { MoviesongsPage } from './../moviesongs/moviesongs.page';
import { Component, OnInit, NgModule } from '@angular/core';
import { SongsServices } from '../services/songs.services';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})
export class Tab4Page implements OnInit {
  songs: any;
  album: any;
  filterSongs: any;
  constructor(private songsServices: SongsServices, private route: Router) {}

  ngOnInit() {
    this.songsServices.getSongsAlbumList().subscribe(
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
        return ( item.album.toLowerCase().indexOf(searchbar.toLowerCase()) > -1);
      });
    }
  }

  movieSelected(item: any) {
    this.songsServices.getSongsListAlbum(item.album).subscribe(
      result => {
        this.songsServices.albumList = result;
        this.route.navigate(['./moviesongs']);
      },
      error => {
        console.log('There is an error');
      }
    );
  }

  // Item Selected
  songSelected(songs: any) {
    this.songsServices.songItem = songs;
    this.route.navigate(['./songsdetail']);
  }

}
