import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SongsdetailPage } from './songsdetail.page';

const routes: Routes = [
  {
    path: '',
    component: SongsdetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SongsdetailPageRoutingModule {}
