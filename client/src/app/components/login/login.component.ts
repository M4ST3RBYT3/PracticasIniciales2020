import { Router } from '@angular/router';
import { Usuario } from './../../models/usuario.model';
import { Component, OnInit } from '@angular/core';
import { AppsService } from 'src/app/services/apps.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  usuarioRegistro: Usuario;

  credenciales = {
    Carnet: null,
    Contrasena: null
  };
  URecuperacion = new Usuario();
  recuperacion = {
    Carnet: null,
    Correo: null,
    NuevaContrasena: null,
    DatosCorrectos: false
  };
  constructor(
    public appservice: AppsService,
    private route: Router) {
      this.usuarioRegistro = new Usuario();
     }

  ngOnInit(): void {
  }

  registro(){
    this.appservice.saveUsuario(this.usuarioRegistro).subscribe((data) => {
        console.log(data);
        this.route.navigate(['/']);
    });
  }

  login(){
    this.appservice.getUsuarioPB(this.credenciales.Carnet).subscribe((data: any) => {
      this.credenciales.Carnet = Number(this.credenciales.Carnet)
      if (data.Carnet === this.credenciales.Carnet && data.contrasena === this.credenciales.Contrasena){
        console.log(data)
        localStorage.setItem('carnetLogeado', data.Carnet);
        localStorage.setItem('contraseñaLogeado', this.credenciales.Contrasena);
        this.route.navigate(['/Publicaciones']);
        console.log(localStorage);
      }
    });
  }

  recuperar(){
    this.appservice.getUsuario(this.recuperacion.Carnet).subscribe((data: any) => {
      console.log(data)
      console.log(this.recuperacion)
      this.recuperacion.Carnet = Number(this.recuperacion.Carnet)
      if (data.Carnet === (this.recuperacion.Carnet) && data.correo === this.recuperacion.Correo){
        console.log("Entra?")
        this.recuperacion.DatosCorrectos = true;
        this.URecuperacion.Carnet = data.Carnet;
        this.URecuperacion.Correo = data.correo;
        this.URecuperacion.Nombres = data.Nombres;
        this.URecuperacion.Apellidos = data.Apellidos;
        this.URecuperacion.Contrasena = data.contrasena;
        this.route.navigate(['/']);
      }
    });
  }
  cambio(){
    this.URecuperacion.Contrasena = this.recuperacion.NuevaContrasena;
    this.appservice.updateUsuario(this.recuperacion.Carnet, this.URecuperacion).subscribe((data: any) => {
      console.log('cambio');
    });
  }

}
