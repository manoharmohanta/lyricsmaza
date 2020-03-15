import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ArtistsongsPageRoutingModule } from './artistsongs-routing.module';

import { ArtistsongsPage } from './artistsongs.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ArtistsongsPageRoutingModule
  ],
  declarations: [ArtistsongsPage]
})
export class ArtistsongsPageModule {}
