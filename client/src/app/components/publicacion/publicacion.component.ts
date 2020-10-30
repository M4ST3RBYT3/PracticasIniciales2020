import { Component, OnInit } from '@angular/core';
import { Publicacion } from '../../models/Publicacion';

import { AppsService } from '../../services/apps.service';

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
    Usuario_Carnet: 201903838,
    Curso_Catedratico_idCatedraticoCurso: null,
    Curso_CodigoCurso: null,
    Catedratico_NoCatedratico: null,
    Tipo: null 
  }
  
  constructor(private appsService: AppsService) { }

  ngOnInit(): void {
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

}
