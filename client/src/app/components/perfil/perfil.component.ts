import { Component, OnInit } from '@angular/core';
import { AppsService} from '../../services/apps.service';
import { App } from 'src/app/models/App'

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  apps: any = [];

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
