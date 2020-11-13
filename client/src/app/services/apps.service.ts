import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { App } from '../models/App';
import { Publicacion } from '../models/Publicacion';
import { Comentario } from '../models/Comentario';
import { from, Observable } from 'rxjs';
import { CursoAprobado } from '../models/CursoAprobado';
import { Usuario } from '../models/usuario.model';


@Injectable({
  providedIn: 'root'
})
export class AppsService {

  API_URI = 'http://localhost:3000/api';

  constructor(private http: HttpClient) { }


  getUsuarios() {
    return this.http.get(this.API_URI + '/apps');
  }

  getUsuario(id: any) {
    return this.http.get(this.API_URI + '/apps/' + id);
  }
  getUsuariosPB(){
    return this.http.get(this.API_URI + '/apps');
  }

  getUsuarioPB(id: number){
    return this.http.get('http://localhost:3000/api/apps/' + id);

  }

  deleteUsuario(id: string) {
    return this.http.delete('http://localhost:3000/api/apps/${id}');
  }

  saveUsuario(usuario: App) {
    return this.http.post('http://localhost:3000/api/apps', usuario);
  }

  updateUsuario(Carnet: number, updatedUsuario: App): Observable<App> {
    return this.http.put(`${this.API_URI}/apps/${Carnet}`, updatedUsuario);
  }
  saveUsuarioPB(usuario: Usuario){
    return this.http.post('http://localhost:3000/api/apps', usuario);
  }

  updateUsuarioPB(id: number, updatedUsuario: Usuario): Observable<App>{
    return this.http.put('http://localhost:3000/api/apps/' + id, updatedUsuario);

  }

  //PUBLICACIONES
  getPublicacion(id: string) {
    return this.http.get(this.API_URI + '/Publicacion/' + id);
  }


  getPublicaciones() {

    return this.http.get(this.API_URI + '/Publicacion');
  }

  savePublicacion(publicacion: Publicacion) {
    return this.http.post('http://localhost:3000/api/Publicacion/', publicacion);
  }

  guardarCurso(curso: CursoAprobado) {
    return this.http.post(`${this.API_URI}/CursosAprobados/`, curso);
  }

  //GET CURSO VINCULADA CON PENSUMSISTEMAS
  cargarPensum(Carnet:number) {
    return this.http.get(this.API_URI + '/Cursos/'+Carnet);
  }

  //Cursos Aprobados
  getCursoAprobado(Carnet: number) {
    return this.http.get(this.API_URI + '/CursosAprobados/' + Carnet);
  }

  //Creditos Aprobados
  getCreditosAprobados(Carnet: number) {
    return this.http.get(this.API_URI + '/CreditosAprobados/' + Carnet)
  }

  //VALIDACIONES
  getCodigoCurso() {
    return this.http.get(this.API_URI + "/Extra/Curso/")
  }

  getNoCatedratico() {
    return this.http.get(this.API_URI + "/Extra/Catedratico/");
  }

  getCatedraticoCurso() {
    return this.http.get(this.API_URI + "/Extra/CatedraticoCurso/");
  }


  //COMENTARIO
  getComentarios(id: string) {
    return this.http.get(this.API_URI + "/Comentarios/" + id)
  }

  setComentario(comentario: Comentario) {
    return this.http.post(this.API_URI + "/Comentarios", comentario);
  }

  //FILTROS
  getCatedraticos() {
    return this.http.get(this.API_URI + "/Filtros/Catedratico/");
  }

  getCursos() {
    return this.http.get(this.API_URI + "/Filtros/Curso/")
  }

  getCursoNombre(curso: string) {
    return this.http.get(this.API_URI + "/Filtros/Curso/Nombre/" + curso)
  }

  getCatedraticoNombre(catedratico: string) {
    return this.http.get(this.API_URI + "/Filtros/Catedratico/Nombre/" + catedratico)
  }

  //CANTIDAD COMENTARIOS
  getCountComentaios(id: string){
    return this.http.get(this.API_URI + '/Publicacion/Comentario/' + id)
  }




}































