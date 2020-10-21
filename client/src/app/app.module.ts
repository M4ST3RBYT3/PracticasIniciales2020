import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { AppFormComponent } from './components/app-form/app-form.component';
import { AppListComponent } from './components/app-list/app-list.component';

@NgModule({
  declarations: [
    AppComponent,
    //NavigationComponent,
    AppFormComponent,
    AppListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
