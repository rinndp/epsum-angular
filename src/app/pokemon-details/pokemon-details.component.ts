import {Component, OnInit} from '@angular/core';
import {PokemonDetailsService} from '../services/pokemon/pokemon-details.service';
import {Pokemon, PokemonApi, PokemonType} from '../services/interfaces/pokemon';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-pokemon-details',
  templateUrl: './pokemon-details.component.html',
  styleUrl: './pokemon-details.component.scss'
})
export class PokemonDetailsComponent implements OnInit{
  //Creamos pokemon para guarda la información recogida
  pokemon: PokemonApi | null = {
    name: "",
    url: "",
  }

  pokemonType: PokemonType = {
    types: []
  }


  //Creamos un objeto "any" en donde guardaremos todos los detalles del pokemon del json
  pokemonDetalles: any

  constructor(
    private pokemonDetailsService: PokemonDetailsService,
    private http: HttpClient
  ) {
  }

  ngOnInit () {
    //Nos "suscribimos" obteniendo así el valor del dato observado e instanciandolo en el nuevo componente
    this.pokemonDetailsService.infoApi$.subscribe(pk => {
      this.pokemon = pk
    })
    this.getAllPokemonData()
  }

  //Metodo para conseguir todos los datos del json de la PokemonApi
  getAllPokemonData () {
    //Si utilizamos la URl del atributo de pokemonApi es IGUAL ('https://pokeapi.co/api/v2/pokemon/'+this.pokemon?.name)
    this.http.get<any>(<string>this.pokemon?.url).subscribe(detallesPokemon => {
      console.log(detallesPokemon)
      this.pokemonDetalles = detallesPokemon

      this.pokemonType = {
        types: []
      }

      for (let i = 0; i < detallesPokemon.types.length; i++) {
        this.pokemonType.types.push(detallesPokemon.types[i].type.name)
      }
    })
  }
}
