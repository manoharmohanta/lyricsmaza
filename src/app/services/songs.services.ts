import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class SongsServices {
    value: any;
    artistsongs: any;
    albumsongs: any;

    constructor(private httpClient: HttpClient) {

    }

    getSongsDate(date: string) {
        const completeUrl = `${environment.API_URL}?date=${date}`;
        return this.httpClient.get(completeUrl);
    }
    songItem(onesong: string) {
        return onesong;
    }
    // List
    getSongsArtistList() {
        const completeUrl = `${environment.API_URL_LIST}?artist=all`;
        return this.httpClient.get(completeUrl);
    }

    getSongsAlbumList() {
        const completeUrl = `${environment.API_URL_LIST}?album=all`;
        return this.httpClient.get(completeUrl);
    }

    getSongsYoutubeList() {
        const completeUrl = `${environment.API_URL_LIST}?youtubeid=all`;
        return this.httpClient.get(completeUrl);
    }
    // Get list of Songs of Selected Artist & Album
    getSongsListAlbum(album: any) {
        const completeUrl = `${environment.API_URL}?album=${album}`;
        this.albumsongs = this.httpClient.get(encodeURI(completeUrl));
        return(this.albumsongs);
    }
    albumList(albumsongs: any) {
        return albumsongs;
    }
    // tslint:disable-next-line: ban-types
    getSongsListArtist(artist: Object) {
        const completeUrl = `${environment.API_URL}?artist=${artist}`;
        this.artistsongs = this.httpClient.get(encodeURI(completeUrl));
        return(this.artistsongs);
    }
    artistList(artistsongs: any) {
        return this.artistsongs;
    }
}
