import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {PokemonApi} from '../interfaces/pokemon';

@Injectable({
  providedIn: 'root'
})
export class PokemonDetailsService {

  pokemonApi: BehaviorSubject<PokemonApi | null> = new BehaviorSubject<PokemonApi | null>(null)
  infoApi$: Observable<PokemonApi | null> = this.pokemonApi.asObservable()

  constructor() { }

  updatePokemonApi (pokemon: PokemonApi | null) {
    this.pokemonApi.next(pokemon)
  }
}
