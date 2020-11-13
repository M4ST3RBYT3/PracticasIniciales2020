import { Component, HostBinding, OnInit } from '@angular/core';
import { AppsService } from "../../services/apps.service";
import { CursoAprobado } from '../../models/CursoAprobado';
import { Route, Router } from '@Angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {

  listaCursos: any = [];

  curso: CursoAprobado = {
    CarnetU: 0,
    CursoP: 0,
    NotaAprobada: 0
  }


  constructor(private activedRoute: ActivatedRoute, private appsService: AppsService, private router: Router) { }


  ngOnInit(): void {
    const params = this.activedRoute.snapshot.params;
    this.curso.CarnetU = params.Carnet;
    console.log(this.curso);
    this.appsService.cargarPensum(params.CarnetU).subscribe(
      res => {
        this.listaCursos = res;
      },
      err => console.error(err)
    );

  }

  cargarCurso() {
    const params = this.activedRoute.snapshot.params;
    this.curso.CarnetU = params.Carnet;
    console.log(this.curso);
    this.appsService.guardarCurso(this.curso).subscribe(
      res => {
        console.log(res);
        this.router.navigate(['/Publicacion/Perfil/' + params.Carnet])
      },
      err => console.log(err)
    )
  }

  setearCurso(id: number) {
    console.log(id);
    this.curso.CursoP = id;
  }
}

