import { Component, OnInit } from '@angular/core';
import { AppsService } from '../../services/apps.service';
//import { App } from 'src/app/models/App'
import { CursoAprobado } from '../../models/CursoAprobado';

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


  constructor(private appsService: AppsService) { }


  ngOnInit() {

    this.appsService.getCursoAprobado(this.curso.CarnetU).subscribe(
      res => {
        this.listaCursosAprobados = res;
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

 //   this.appsService.getCreditosSum(this.curso.CarnetU).subscribe(
    //res2 =>{
      //this.listaCreditosSum = res2;
     // console.log("Chayanne "+this.listaCreditosSum);
     // for (let i of this.listaCreditosSum) this.total +=i;
      //console.log("La suma es "+this.total);
    //},
    //err => console.log(err)
    //);

  }

}
