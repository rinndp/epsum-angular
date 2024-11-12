import {Component, OnInit} from '@angular/core';
import {PokemonDetailsService} from '../services/pokemon/pokemon-details.service';
import {Pokemon, PokemonApi} from '../services/interfaces/pokemon';

@Component({
  selector: 'app-pokemon-details',
  templateUrl: './pokemon-details.component.html',
  styleUrl: './pokemon-details.component.scss'
})
export class PokemonDetailsComponent implements OnInit{
  pokemon: PokemonApi | null = {
    name: "",
    url: ""
  }
  constructor(
    private pokemonDetailsService: PokemonDetailsService
  ) {
  }

  ngOnInit () {
    this.pokemonDetailsService.infoApi$.subscribe(pk => {
      this.pokemon = pk
    })
  }
}
