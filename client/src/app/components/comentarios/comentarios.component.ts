import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


import { AppsService } from '../../services/apps.service';
import { Publicacion} from '../../models/Publicacion';
import { Comentario } from '../../models/Comentario';


@Component({
  selector: 'app-comentarios',
  templateUrl: './comentarios.component.html',
  styleUrls: ['./comentarios.component.css']
})
export class ComentariosComponent implements OnInit {

  comentarios: any = []
  publicaciones: any = []

  publicacion: Publicacion ={
    Mensaje: '',
    Usuario_Carnet: 201903838,
    Curso_Catedratico_idCatedraticoCurso: 0,
    Curso_CodigoCurso: 0,
    Catedratico_NoCatedratico: 0,
    Tipo: 0 
  }
  
  //CAMBIAR EL CARNET CUANDO TENGAMOS LAS FUNCIONES DE USUARIO
  comentario: Comentario ={
    Mensaje: '',
    Publicacion_idPublicacion: null,
    Usuario_Carnet: 201903838,
  }

  constructor(private activedRoute: ActivatedRoute, private appsService: AppsService) { }

  ngOnInit(): void {
    const params = this.activedRoute.snapshot.params;
    if(params.id){
      this.appsService.getPublicacion(params.id)
      .subscribe(
        res => {
          console.log(res);
          this.publicaciones = res;
        },
        err => console.error(err)
      )
    }
    //AGREGAMOS A NUESTRO OBJETO EL ID DE LA PUBLICACION A LA QUE ENTRAMOS
    this.listarComentarios()
  }

  listarComentarios(){
    const params = this.activedRoute.snapshot.params;
    this.comentario.Publicacion_idPublicacion = params.id;
    this.appsService.getComentarios(params.id).subscribe(
      res => {
        this.comentarios = res;
      },
      err => console.log(err)
    )
  }

  agregarComentario(){
    this.appsService.setComentario(this.comentario)
      .subscribe(
        res => {
          console.log(res)
          this.listarComentarios();
        }, 
        err => console.error(err)
      )
      this.comentario.Mensaje = ''
  }
    
}
