import { Component, OnInit } from '@angular/core';
import { Publicacion } from '../../models/Publicacion';
import { Router } from '@angular/router';

import { AppsService } from '../../services/apps.service';
import { from } from 'rxjs';

@Component({
  selector: 'app-publicacion',
  templateUrl: './publicacion.component.html',
  styleUrls: ['./publicacion.component.css']
})
export class PublicacionComponent implements OnInit {

  cursos: any = [];
  catedraticos: any = [];
  cursoCatedraticos: any = [];

  publicacion: Publicacion ={
    Mensaje: '',
    Usuario_Carnet: 0,
    Curso_Catedratico_idCatedraticoCurso: 0,
    Curso_CodigoCurso: 0,
    Catedratico_NoCatedratico: 0,
    Tipo: 0 
  }
  
  constructor(private appsService: AppsService, private route: Router) { }

  ngOnInit(): void {
    this.publicacion.Usuario_Carnet = Number(localStorage.getItem('carnetLogeado'));
    console.log(this.publicacion.Usuario_Carnet);

    this.appsService.getCodigoCurso().subscribe(
      res => {
        this.cursos = res;
      },
      err => console.error(err)
    );
    this.appsService.getNoCatedratico().subscribe(
      res => {
        this.catedraticos = res
      },
      err => console.error(err)
    );
    this.appsService.getCatedraticoCurso().subscribe(
      res => {
        this.cursoCatedraticos = res
      },
      err => console.error(err)
    );
  }

  //CON ESTE METODO GUARDAMOS LOS DATOS
  savePublicacion(){
    //Tipo VALUES: 1 - CATEDRATICO/CURSO. 2 - CURSO. 3 - CATEDRATICO
    if(this.publicacion.Tipo == 1){
      delete this.publicacion.Curso_CodigoCurso;
      delete this.publicacion.Catedratico_NoCatedratico;
    }
    else if (this.publicacion.Tipo == 2){
      delete this.publicacion.Catedratico_NoCatedratico;
      delete this.publicacion.Curso_Catedratico_idCatedraticoCurso;
    }
    else if (this.publicacion.Tipo == 3){
      delete this.publicacion.Curso_Catedratico_idCatedraticoCurso;
      delete this.publicacion.Curso_CodigoCurso;
    }
    this.appsService.savePublicacion(this.publicacion)
      .subscribe(
        res => {
          console.log(res);
          this.route.navigate(['/Publicaciones']);
        },
        err => console.error(err)
      )   
  }

  setearID(id: number, option: number){
    //OPTION VALUES: 1 - CATEDRATICO/CURSO. 2 - CURSO. 3 - CATEDRATICO
    if(option == 1){
      this.publicacion.Curso_Catedratico_idCatedraticoCurso = id;
    }
    else if (option == 2){
      this.publicacion.Curso_CodigoCurso = id;
    }
    else if (option == 3){
     this.publicacion.Catedratico_NoCatedratico = id; 
    }
  }

  
}
