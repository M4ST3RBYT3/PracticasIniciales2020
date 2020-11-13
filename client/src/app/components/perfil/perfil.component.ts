import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppsService} from '../../services/apps.service';
import { App } from 'src/app/models/App'
import { CursoAprobado } from '../../models/CursoAprobado';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  apps: any = [];
  listaCursosAprobados: any = [];
  listaCreditos:any=[];
  

  curso:CursoAprobado = {
    CarnetU:Number(localStorage.getItem('carnetLogeado')),
    CursoP:0,
    NotaAprobada:0
  }  

  user:App = {
    Carnet:Number(localStorage.getItem('carnetLogeado')),
    Nombres:"",
    Apellidos:"",
    contrasena:"",
    correo:""
  }



  constructor(private appsService: AppsService, private activedRoute: ActivatedRoute) { }

  ngOnInit(): void {   
    const params = this.activedRoute.snapshot.params;
    this.appsService.getUsuario(params.Carnet).subscribe(
      res => {
        console.log(res);
        this.apps=res;
      },
      err => console.log(err)
    );



    this.appsService.getCreditosAprobados(params.Carnet).subscribe(
      res => {
        this.listaCreditos = res;
        console.log(this.listaCreditos);
      },
      err => console.log(err)
    );

    this.appsService.getCursoAprobado(params.Carnet).subscribe(
      res => {
        this.listaCursosAprobados = res;
      },
      err => console.log(err)
    );
  
  }


}
