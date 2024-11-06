import { Component } from '@angular/core';
import {Pokemon} from "../services/interfaces/pokemon";

@Component({
  selector: 'app-informacion',
  templateUrl: './informacion.component.html',
  styleUrl: './informacion.component.scss'
})
export class InformacionComponent {
  pokemon: Pokemon [] = [
    {id:1, nombre: "", descripcion: "", imagen_url: ""},
    {id:1, nombre: "", descripcion: "", imagen_url: ""},
    {id:1, nombre: "", descripcion: "", imagen_url: ""},
    {id:1, nombre: "", descripcion: "", imagen_url: ""},
    {id:1, nombre: "", descripcion: "", imagen_url: ""},
  ]
}
