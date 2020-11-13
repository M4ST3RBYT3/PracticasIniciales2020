import { Component, OnInit } from '@angular/core';
import { AppsService} from '../../services/apps.service';
import { App } from 'src/app/models/App'

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  apps: any = [];

  user:App = {
    Carnet:201904025,
    Nombres:"",
    Apellidos:"",
    contrasena:"",
    correo:""
  }

  constructor(private appsService: AppsService) { }

  ngOnInit(): void {
    this.user.Carnet = Number(localStorage.getItem('carnetLogeado'));
  }

  //DECLARAR UNA FUNCION PARA CAMBIAR DE VISTA CON

}
