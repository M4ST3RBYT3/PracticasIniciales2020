import { Component, OnInit } from '@angular/core';
import { PublicacionVista } from '../../models/PublicacionVista';
import { Publicacion } from '../../models/Publicacion';

import { AppsService } from '../../services/apps.service';

@Component({
  selector: 'app-publicacion',
  templateUrl: './publicacion.component.html',
  styleUrls: ['./publicacion.component.css']
})
export class PublicacionComponent implements OnInit {

  publicacionVista: PublicacionVista = {
    Mensaje: '',
    Usuario_Carnet: 201908325,
    DatoCurso: '',
    Tipo: null
  }

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
  }

  //CON ESTE METODO GUARDAMOS LOS DATOS
  savePublicacion(){
    console.log(this.publicacionVista);   
    if(this.publicacionVista.Tipo == 1){
      var entrada = this.publicacionVista.DatoCurso.toString();
      var separado = entrada.split(",", 2);
      this.appsService.getCatedraticoCurso('11').subscribe(
        res => {
           console.log(res);
        },
        err => console.error(err)
      );
      console.log(this.publicacion);
    }
    else if (this.publicacionVista.Tipo == 2){
      
    }
    else if (this.publicacionVista.Tipo == 3){
      
    }    
  }
}
