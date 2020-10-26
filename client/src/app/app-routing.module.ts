import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppListComponent} from './components/app-list/app-list.component';
<<<<<<< HEAD
import { CursosComponent } from './components/cursos/cursos.component';
import { PerfilComponent } from './components/perfil/perfil.component';
import { ModificarComponent } from './components/modificar/modificar.component';
=======
import { PublicacionComponent } from './components/publicacion/publicacion.component';
>>>>>>> 99932288c3ed0a91e7feb129871472237f817d4f

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
=======
    path: 'Publicacion/add',
    component: PublicacionComponent
>>>>>>> 99932288c3ed0a91e7feb129871472237f817d4f
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
