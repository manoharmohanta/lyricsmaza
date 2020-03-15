import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SongsdetailPageRoutingModule } from './songsdetail-routing.module';

import { SongsdetailPage } from './songsdetail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SongsdetailPageRoutingModule
  ],
  declarations: [SongsdetailPage]
})
export class SongsdetailPageModule {}
