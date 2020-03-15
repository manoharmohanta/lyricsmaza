import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MoviesongsPage } from './moviesongs.page';

const routes: Routes = [
  {
    path: '',
    component: MoviesongsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MoviesongsPageRoutingModule {}
