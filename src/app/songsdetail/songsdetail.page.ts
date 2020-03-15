import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { SongsServices } from '../services/songs.services';

@Component({
  selector: 'app-songsdetail',
  templateUrl: './songsdetail.page.html',
  styleUrls: ['./songsdetail.page.scss'],
})
export class SongsdetailPage implements OnInit {
  song: any;
  constructor(private songsServices: SongsServices, private route: Router) { }

  ngOnInit() {
    if (this.songsServices.songItem.length < 0) {
      this.route.navigate(['./tab1']);
    } else {
      this.song = this.songsServices.songItem;
    }
  }

}
