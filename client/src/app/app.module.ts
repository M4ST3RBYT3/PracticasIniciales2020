import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppFormComponent } from './components/app-form/app-form.component';
import { AppListComponent } from './components/app-list/app-list.component';
import { NavigationComponent } from './components/navigation/navigation.component';

import {AppsService} from './services/apps.service';
<<<<<<< HEAD
import { CursosComponent } from './components/cursos/cursos.component';
import { PerfilComponent } from './components/perfil/perfil.component';
import { ModificarComponent } from './components/modificar/modificar.component';
//import { from } from 'rxjs';
=======
import { PublicacionComponent } from './components/publicacion/publicacion.component';
>>>>>>> 99932288c3ed0a91e7feb129871472237f817d4f

@NgModule({
  declarations: [
    AppComponent,
    AppFormComponent,
    AppListComponent,
    NavigationComponent,
<<<<<<< HEAD
    CursosComponent,
    PerfilComponent,
    ModificarComponent,
=======
    PublicacionComponent,
>>>>>>> 99932288c3ed0a91e7feb129871472237f817d4f
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    AppsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
