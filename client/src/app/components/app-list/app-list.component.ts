import { Component, OnInit } from '@angular/core';

import { Publicacion } from '../../models/Publicacion';
import { AppsService } from '../../services/apps.service';

@Component({
  selector: 'app-app-list',
  templateUrl: './app-list.component.html',
  styleUrls: ['./app-list.component.css']
})
export class AppListComponent implements OnInit {


  publicaciones: any = []
  cantidad: any = []

  paramsfiltro: Publicacion ={
    Mensaje: '',
    Tipo: 0
  }


  constructor(private appsService: AppsService) { }

  ngOnInit() {
    this.appsService.getPublicaciones().subscribe(
      res => {
        this.publicaciones = res;
      },
      err => console.error(err)
    );
  }

  countComentarios(id: string){
    console.log(id)
    this.appsService.getCountComentaios(id).subscribe(
      res => {
        this.cantidad = res;
      },
      err => console.log(err)
    );
  }

  filtro(){
    //Filtro para buscar catedratico por nombre
    if(this.paramsfiltro.Tipo == 2 && this.paramsfiltro.Mensaje != ''){
      this.appsService.getCatedraticoNombre(this.paramsfiltro.Mensaje).subscribe(
        res => {
          this.publicaciones = res;
        },
        err => console.error(err)
      );
    }
    //Filtro para buscar curso por nombre
    else if(this.paramsfiltro.Tipo == 3 && this.paramsfiltro.Mensaje != ''){
      this.appsService.getCursoNombre(this.paramsfiltro.Mensaje).subscribe(
        res => {
          this.publicaciones = res;
        },
        err => console.error(err)
      );
    }
    //Filtro para todos los catedraticos
    else if (this.paramsfiltro.Tipo == 2 && this.paramsfiltro.Mensaje == '') {
      this.appsService.getCatedraticos().subscribe(
        res => {
          this.publicaciones = res;
        },
        err => console.error(err)
      )
    }
    //Filtro para todos los cursos
    else if(this.paramsfiltro.Tipo == 3 && this.paramsfiltro.Mensaje == ''){
      this.appsService.getCursos().subscribe(
        res =>{
          this.publicaciones = res;
        },
        err => console.error(err)
      );
    }
  }
}
