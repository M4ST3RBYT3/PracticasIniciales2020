import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppListComponent} from './components/app-list/app-list.component';
import { PublicacionComponent } from './components/publicacion/publicacion.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/Publicacion',
    pathMatch: 'full'
  },
  {
    path: 'Publicacion',
    component: AppListComponent
  },
  {
    path: 'Publicacion/add',
    component: PublicacionComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
