import { Component, OnInit, HostBinding } from '@angular/core';
import { AppsService} from '../../services/apps.service';
import { Route,Router } from '@Angular/router';
import { App } from 'src/app/models/App'
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-modificar',
  templateUrl: './modificar.component.html',
  styleUrls: ['./modificar.component.css']
})
export class ModificarComponent implements OnInit {

modi: any = [];

app: App = {
Carnet: 0,
Nombres: '',
Apellidos: '',
correo: '',
contrasena: 'anitabb'
}

  constructor(private activedRoute: ActivatedRoute, private appsService: AppsService, private router: Router) { }

    ngOnInit() {
      this.appsService.getUsuarios().subscribe(
        res => {
          this.modi=res;
        },
        err => console.log(err)
      );

    }

    updateUsuario(){
      const params = this.activedRoute.snapshot.params;
      this.app.Carnet = params.Carnet;
      console.log(this.app);
      this.appsService.updateUsuario(params.Carnet,this.app).subscribe(

        res => {

          console.log(res);
          this.router.navigate(['/Publicacion/Perfil/'+params.Carnet])
  
        },
        err => console.error(err)
      )
    }
  

 

    
}
