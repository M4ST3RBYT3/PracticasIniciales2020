import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { App } from '../models/App';
import { Publicacion } from '../models/Publicacion';
import { from, Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class AppsService {

  API_URI = 'http://localhost:3000/api';

  constructor(private http: HttpClient) { }

  getUsuarios(){
    return this.http.get(this.API_URI+'/apps');
  }

  getUsuario(Carnet: number){
    return this.http.get(`${this.API_URI}/apps/${Carnet}`);
  }

  deleteUsuario(id: string ){
    return this.http.delete('http://localhost:3000/api/apps/${id}');
  }
  
  saveUsuario(usuario: App){
    return this.http.post('http://localhost:3000/api/apps', usuario);
  }

  updateUsuario(Carnet: number, updatedUsuario:App): Observable<App>{
    return this.http.put(`${this.API_URI}/apps/${Carnet}`, updatedUsuario);
  }

  //PUBLICACIONES
  getPublicacion(id: string){
    return this.http.get(this.API_URI + '/Publicacion/' + id);
  }
  
  getPublicaciones(){
    return this.http.get(this.API_URI + '/Publicacion');
  }

  savePublicacion(publicacion: Publicacion){
    return this.http.post('http://localhost:3000/api/apps', publicacion);
  }

  
  

  


}
