import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { App } from '../models/App';
import { Publicacion } from '../models/Publicacion';
import { Comentario } from '../models/Comentario';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppsService {

  API_URI = 'http://localhost:3000/api';

  constructor(private http: HttpClient) { }

  getUsuarios(){
    return this.http.get(this.API_URI+'/apps');
  }

  getUsuario(id: string){
    return this.http.get('http://localhost:3000/api/apps/${id}');
  }

  deleteUsuario(id: string ){
    return this.http.delete('http://localhost:3000/api/apps/${id}');
  }
  
  saveUsuario(usuario: App){
    return this.http.post('http://localhost:3000/api/apps', usuario);
  }

  updateUsuario(id, updatedUsuario): Observable<App>{
    return this.http.put('http://localhost:3000/api/apps/${id}', updatedUsuario);
  }

  //PUBLICACIONES
  getPublicacion(id: string){
    return this.http.get(this.API_URI + '/Publicacion/' + id);
  }
  
  getPublicaciones(){
    return this.http.get(this.API_URI + '/Publicacion');
  }

  savePublicacion(publicacion: Publicacion){
    return this.http.post('http://localhost:3000/api/Publicacion/', publicacion);
  }

  //VALIDACIONES
  getCodigoCurso(){
    return this.http.get(this.API_URI + "/Extra/Curso/")
  }

  getNoCatedratico(){
    return this.http.get(this.API_URI + "/Extra/Catedratico/");
  }

  getCatedraticoCurso(){
    return this.http.get(this.API_URI + "/Extra/CatedraticoCurso/");
  }

  //COMENTARIO
  getComentarios(id: string){
    return this.http.get(this.API_URI + "/Comentarios/" + id)
  }

  setComentario(comentario: Comentario){
    return this.http.post(this.API_URI + "/Comentarios", comentario);
  }
  
}
