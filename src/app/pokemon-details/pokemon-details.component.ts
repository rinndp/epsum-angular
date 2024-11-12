import { Component } from '@angular/core';
import {PokemonDetailsService} from '../services/pokemon/pokemon-details.service';

@Component({
  selector: 'app-pokemon-details',
  templateUrl: './pokemon-details.component.html',
  styleUrl: './pokemon-details.component.scss'
})
export class PokemonDetailsComponent {
  constructor(
    private pokemonDetailsService: PokemonDetailsService
  ) {
  }



}
