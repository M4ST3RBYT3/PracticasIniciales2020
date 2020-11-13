import { Component, OnInit } from '@angular/core';
import { AppsService } from '../../services/apps.service';
import { App } from 'src/app/models/App';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pensum',
  templateUrl: './pensum.component.html',
  styleUrls: ['./pensum.component.css']
})
export class PensumComponent implements OnInit {

  listaPensum: any = [];
  app: App = {
    Carnet: 0,
    Nombres: '',
    Apellidos: '',
    correo: '',
    contrasena: 'anitabb'
  }

  constructor(private activedRoute: ActivatedRoute, private appsService: AppsService) { }

  ngOnInit() {
    const params = this.activedRoute.snapshot.params;
    this.app.Carnet = params.Carnet;
    console.log(this.app);
    this.appsService.cargarPensum(params.Carnet).subscribe(
      res => {
        this.listaPensum = res;
      },
      err => console.log(err)
    );

  }

}
