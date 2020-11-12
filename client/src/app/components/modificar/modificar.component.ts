import { Component, OnInit, HostBinding } from '@angular/core';
import { AppsService} from '../../services/apps.service';
import { Route,Router } from '@Angular/router';
import { App } from 'src/app/models/App'

@Component({
  selector: 'app-modificar',
  templateUrl: './modificar.component.html',
  styleUrls: ['./modificar.component.css']
})
export class ModificarComponent implements OnInit {

modi: any = [];

app: App = {
Carnet: 201904025,
Nombres: '',
Apellidos: '',
correo: '',
contrasena: 'anitabb'
}

  constructor(private appsService: AppsService, private router: Router) { }

    ngOnInit() {
      this.appsService.getUsuarios().subscribe(
        res => {
          this.modi=res;
        },
        err => console.log(err)
      );

    }

    updateUsuario(){
  
      console.log(this.app);
      this.appsService.updateUsuario(this.app.Carnet ,this.app).subscribe(

        res => {

          console.log(res);
          this.router.navigate(['/Publicacion/Perfil'])
  
        },
        err => console.error(err)
      )
    }
  

 

    
}
