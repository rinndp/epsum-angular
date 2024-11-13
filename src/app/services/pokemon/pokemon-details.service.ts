import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {PokemonApi} from '../interfaces/pokemon';

@Injectable({
  providedIn: 'root'
})
export class PokemonDetailsService {
  //Definimos el tipo de dato que se va a transferir
  pokemonApi: BehaviorSubject<PokemonApi | null> = new BehaviorSubject<PokemonApi | null>(null)
  //Definimos un Obeservable que vigile su estado
  infoApi$: Observable<PokemonApi | null> = this.pokemonApi.asObservable()

  constructor() { }

  //Creamos metodo para actualizar el Pokemon
  updatePokemonApi (pokemon: PokemonApi | null) {
    this.pokemonApi.next(pokemon)
  }
}
