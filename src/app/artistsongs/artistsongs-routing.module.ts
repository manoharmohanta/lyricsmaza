import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ArtistsongsPage } from './artistsongs.page';

const routes: Routes = [
  {
    path: '',
    component: ArtistsongsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ArtistsongsPageRoutingModule {}
