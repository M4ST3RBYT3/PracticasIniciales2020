import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppListComponent} from './components/app-list/app-list.component';
import { CursosComponent } from './components/cursos/cursos.component';
import { PerfilComponent } from './components/perfil/perfil.component';
import { ModificarComponent } from './components/modificar/modificar.component';

import { PublicacionComponent } from './components/publicacion/publicacion.component';
import { PensumComponent } from './components/pensum/pensum.component';


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
    path: 'Publicacion/Perfil/Cursos',
    component: CursosComponent
  },
  {
    path: 'Publicacion/Perfil',
    component: PerfilComponent
  },
  {
    path: 'Publicacion/Perfil/Modificar',
    component: ModificarComponent
  },
  {
    path: 'Publicacion/add',
    component: PublicacionComponent

  },
  {
    path: 'Publicacion/Perfil/Pensum',
    component: PensumComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
