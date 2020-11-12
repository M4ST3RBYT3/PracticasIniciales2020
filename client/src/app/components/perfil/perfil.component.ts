import { Component, OnInit } from '@angular/core';
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
    CarnetU:201904025,
    CursoP:0,
    NotaAprobada:0
  }  

  

  constructor(private appsService: AppsService) { }

  ngOnInit() {
    this.appsService.getUsuarios().subscribe(
      res => {
        this.apps=res;
      },
      err => console.log(err)
    );
    
    this.appsService.getCreditosAprobados(this.curso.CarnetU).subscribe(
      res => {
        this.listaCreditos = res;
        console.log(this.listaCreditos);
      },
      err => console.log(err)
    );

    this.appsService.getCursoAprobado(this.curso.CarnetU).subscribe(
      res => {
        this.listaCursosAprobados = res;
      },
      err => console.log(err)
    );
  
  }

}
