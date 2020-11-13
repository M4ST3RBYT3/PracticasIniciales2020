import { Router } from 'express';
import { Usuario } from './../../models/usuario.model';
import { Component, OnInit } from '@angular/core';
import { AppsService } from 'src/app/services/apps.service';
import * as jQuery from 'jquery';

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
    public appservice: AppsService) {
      this.usuarioRegistro = new Usuario();
     }

  ngOnInit(): void {
  }

  registro(){
    this.appservice.saveUsuario(this.usuarioRegistro).subscribe((data) => {
        console.log(data);
    });
  }

  login(){
    this.appservice.getUsuario(this.credenciales.Carnet).subscribe((data: any) => {
      console.log(data)
      if (data.Carnet === this.credenciales.Carnet && data.contrasena === this.credenciales.Contrasena){
        localStorage.setItem('carnetLogeado', data.Carnet);
      }
    });
  }

  recuperar(){
    this.appservice.getUsuario(this.recuperacion.Carnet).subscribe((data: any) => {
      console.log(data)
      console.log(this.recuperacion)
      if (data.Carnet === (this.recuperacion.Carnet) && data.correo === this.recuperacion.Correo){
        console.log("Entra?")
        this.recuperacion.DatosCorrectos = true;
        this.URecuperacion.Carnet = data.Carnet;
        this.URecuperacion.Correo = data.correo;
        this.URecuperacion.Nombres = data.Nombres;
        this.URecuperacion.Apellidos = data.Apellidos;
        this.URecuperacion.Contrasena = data.contrasena;
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
