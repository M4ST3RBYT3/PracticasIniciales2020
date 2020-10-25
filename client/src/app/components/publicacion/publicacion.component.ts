import { Component, OnInit } from '@angular/core';
import { Publicacion } from '../../models/Publicacion';

import { AppsService } from '../../services/apps.service';

@Component({
  selector: 'app-publicacion',
  templateUrl: './publicacion.component.html',
  styleUrls: ['./publicacion.component.css']
})
export class PublicacionComponent implements OnInit {

  publicacion: Publicacion = {
    Mensaje: '',
    Usuario_Carnet: 201908325,
    DatoCurso: '',
    Tipo: null
  }

  constructor(private appsService: AppsService) { }

  ngOnInit(): void {
  }

  savePublicacion(){
    console.log(this.publicacion);
  }
}
