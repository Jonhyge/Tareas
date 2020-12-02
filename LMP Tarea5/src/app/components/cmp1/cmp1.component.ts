import { Component, OnInit } from '@angular/core';
import {CookieService} from 'ngx-cookie-service';


@Component({
  selector: 'app-cmp1',
  templateUrl: './cmp1.component.html',
  styleUrls: ['./cmp1.component.css']
})
export class Cmp1Component implements OnInit {

  Nombre:'';
  ApellidoP:'';
  ApellidoM:'';
  Email:'';
  Contrasena:'';

  producircookie(){
    console.log("Agregando Datos")
    this.cookieSvc.set("nombre",this.Nombre);
    this.cookieSvc.set("apelp",this.ApellidoP);
    this.cookieSvc.set("apelm",this.ApellidoM);
    this.cookieSvc.set("email",this.Email);
    this.cookieSvc.set("contrasena",this.Contrasena);
    alert("Los datos han sido guardados");
  }

  obtenercookies(){
    alert("Los datos agregados mas recientes son: \nNombre: "+this.cookieSvc.get("nombre")+" "+this.cookieSvc.get("apelp")+" "+this.cookieSvc.get("apelm")+"\nEmail: "+this.cookieSvc.get("email"));
  }
  constructor(private cookieSvc:CookieService) { }

  ngOnInit(): void {

  }

}
