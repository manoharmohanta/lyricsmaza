import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'songsdetail',
    loadChildren: () => import('./songsdetail/songsdetail.module').then( m => m.SongsdetailPageModule)
  },
  {
    path: 'moviesongs',
    loadChildren: () => import('./moviesongs/moviesongs.module').then( m => m.MoviesongsPageModule)
  },
  {
    path: 'artistsongs',
    loadChildren: () => import('./artistsongs/artistsongs.module').then( m => m.ArtistsongsPageModule)
  }
  //{
  //   path: 'tab4',
  //   loadChildren: () => import('./tab4/tab4.module').then( m => m.Tab4PageModule)
  // }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
