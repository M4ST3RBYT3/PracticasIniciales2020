import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppFormComponent } from './components/app-form/app-form.component';
import { AppListComponent } from './components/app-list/app-list.component';
import { NavigationComponent } from './components/navigation/navigation.component';

import {AppsService} from './services/apps.service';
//import { from } from 'rxjs';

@NgModule({
  declarations: [
    AppComponent,
    AppFormComponent,
    AppListComponent,
    NavigationComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    AppsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }