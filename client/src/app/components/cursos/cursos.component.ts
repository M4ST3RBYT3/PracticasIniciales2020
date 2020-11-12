import { Component, HostBinding, OnInit } from '@angular/core';
import {AppsService} from "../../services/apps.service";
import { CursoAprobado } from '../../models/CursoAprobado';
import { Route,Router } from '@Angular/router';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {

  listaCursos: any = [];
  
  curso:CursoAprobado = {
    CarnetU:201904025,
    CursoP:0,
    NotaAprobada:0
  }  


  constructor(private appsService: AppsService, private router: Router) { }


  ngOnInit(): void {
  this.appsService.getCodigoCurso().subscribe(
    res => {
      this.listaCursos = res;
    },
    err => console.error(err)
  );
  
  }

  cargarCurso(){
    console.log(this.curso);
    this.appsService.guardarCurso(this.curso).subscribe(
      res => {
        console.log(res);
        this.router.navigate(['/Publicacion/Perfil'])
      },
      err => console.log(err)
    )
  }

  setearCurso(id:number){
    this.curso.CursoP=id;
  }
}

