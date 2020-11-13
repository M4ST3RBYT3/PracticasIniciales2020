import { Component, OnInit } from '@angular/core';
import { AppsService } from '../../services/apps.service';
//import { App } from 'src/app/models/App'
import { CursoAprobado } from '../../models/CursoAprobado';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cursos-aprobados',
  templateUrl: './cursos-aprobados.component.html',
  styleUrls: ['./cursos-aprobados.component.css']
})
export class CursosAprobadosComponent implements OnInit {

  listaCreditos: any = [];
  listaCursosAprobados: any = [];
  total: number = 0;
  listaCreditosSum: any = [];

  curso: CursoAprobado = {
    CarnetU: 0,
    CursoP: 0,
    NotaAprobada: 0
  };


  constructor(private activedRoute: ActivatedRoute,private appsService: AppsService) { }


  ngOnInit() {
    const params = this.activedRoute.snapshot.params;
    this.curso.CarnetU = params.Carnet;
    console.log(this.curso);
    this.appsService.getCursoAprobado(params.Carnet).subscribe(
      res => {
        this.listaCursosAprobados = res;
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
  }

}
