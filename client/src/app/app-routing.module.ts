import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppListComponent} from './components/app-list/app-list.component';
<<<<<<< HEAD
import { CursosComponent } from './components/cursos/cursos.component';
import { PerfilComponent } from './components/perfil/perfil.component';
import { ModificarComponent } from './components/modificar/modificar.component';

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
<<<<<<< HEAD
    path: 'Publicacion/Cursos',
    component: CursosComponent
  },
  {
    path: 'Perfil',
    component: PerfilComponent
  },
  {
    path: 'Perfil/Modificar',
    component: ModificarComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
