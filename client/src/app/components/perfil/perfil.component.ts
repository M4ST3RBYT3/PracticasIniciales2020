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

  
  }

}
