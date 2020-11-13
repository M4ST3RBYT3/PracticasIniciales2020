
import { Component, NgModule } from '@angular/core';


import { LoginComponent } from './components/login/login.component';
import { Routes, RouterModule } from '@angular/router';

import { AppListComponent} from './components/app-list/app-list.component';


import { CursosComponent } from './components/cursos/cursos.component';
import { PerfilComponent } from './components/perfil/perfil.component';
import { ModificarComponent } from './components/modificar/modificar.component';


import { ComentariosComponent } from './components/comentarios/comentarios.component';

import { PublicacionComponent } from './components/publicacion/publicacion.component';
import { PensumComponent } from './components/pensum/pensum.component';
import { CursosAprobadosComponent } from './components/cursos-aprobados/cursos-aprobados.component';



const routes: Routes = [
  {
    path: '',
    redirectTo: '/Inicio',
    pathMatch: 'full'
  },
  {
    path: 'Inicio',
    component: LoginComponent
  },
  {

    path: 'Publicacion/Cursos',
    component: CursosComponent
  },
  {
    path: 'Publicacion/Perfil/Cursos/:Carnet',
    component: CursosComponent
  },
  {
    path: 'Publicacion/Perfil/:Carnet',
    component: PerfilComponent
  },
  {
    path: 'Publicacion/Perfil/Modificar/:Carnet',
    component: ModificarComponent
  },

  {
    path: 'Publicacion/add',
    component: PublicacionComponent

  },
  {
    path: 'Publicacion/Comentario/:id',
    component: ComentariosComponent
  },
  {
    path: 'Publicacion/Perfil/Pensum/:Carnet',
    component: PensumComponent
  },
  {
    path: 'Publicacion/Perfil/CursosAprobados/:Carnet',
    component: CursosAprobadosComponent
  },
  {
    path: 'Publicacion/add',
    component: PublicacionComponent
  },
  {
    path: 'Publicaciones',
    component: AppListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
