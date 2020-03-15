import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MoviesongsPageRoutingModule } from './moviesongs-routing.module';

import { MoviesongsPage } from './moviesongs.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MoviesongsPageRoutingModule
  ],
  declarations: [MoviesongsPage]
})
export class MoviesongsPageModule {}
