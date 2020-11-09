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
import { CursosComponent } from './components/cursos/cursos.component';
import { PerfilComponent } from './components/perfil/perfil.component';
import { ModificarComponent } from './components/modificar/modificar.component';
import { PublicacionComponent } from './components/publicacion/publicacion.component';
import { ComentariosComponent } from './components/comentarios/comentarios.component';
import { PensumComponent } from './components/pensum/pensum.component';

@NgModule({
  declarations: [
    AppComponent,
    AppFormComponent,
    AppListComponent,
    NavigationComponent,
    CursosComponent,
    PerfilComponent,
    ModificarComponent,
    PublicacionComponent,
    ComentariosComponent,
    PensumComponent
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
