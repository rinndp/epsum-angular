import { Component } from '@angular/core';
import {Elemento} from '../services/interfaces/elemento';

@Component({
  selector: 'app-repaso',
  templateUrl: './repaso.component.html',
  styleUrl: './repaso.component.scss'
})
export class RepasoComponent {

  nombre: string = "Axel"
  edad: number = 18
  alumnos: string[] = []
  curso: number | null = null
  grupo: string | undefined = undefined
  elementos:string [] = ["elemento1", "elemento2", "elemento3", "elemento4"]

  elementos2: Elemento[] = [
    {id: 1, nombre: "Elemento1"},
    {id: 2, nombre: "Elemento2"},
    {id: 3, nombre: "Elemento3"},
    {id: 4, nombre: "Elemento4"},
    {id: 5, nombre: "Elemento5"},

  ];

  constructor(
    //private nombreServicio: tipoServicio
  ) {}

  cambioColor: boolean = false
  toggleColor():void {
    this.cambioColor =! this.cambioColor;
  }

  cambiarDisplay: boolean = true
  toggleDisplay(): void {
    this.cambiarDisplay =! this.cambiarDisplay
  }
}
