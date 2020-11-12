import { Component, OnInit } from '@angular/core';
import { AppsService} from '../../services/apps.service';
//import { App } from 'src/app/models/App'
import { CursoAprobado } from '../../models/CursoAprobado';

@Component({
  selector: 'app-cursos-aprobados',
  templateUrl: './cursos-aprobados.component.html',
  styleUrls: ['./cursos-aprobados.component.css']
})
export class CursosAprobadosComponent implements OnInit {
  
  listaCursosAprobados: any = [];

  curso:CursoAprobado = {
    CarnetU:201904025,
    CursoP:0,
    NotaAprobada:0
  };  


  constructor(private appsService: AppsService) { }


  ngOnInit() {
    
    this.appsService.getCursoAprobado(201904025).subscribe(
      res => {
        this.listaCursosAprobados=res;
      },
      err => console.log(err)
    );
  }

}
