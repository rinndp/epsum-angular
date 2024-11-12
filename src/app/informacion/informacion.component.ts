import {Component, OnInit} from '@angular/core';
import {Pokemon, PokemonApi} from "../services/interfaces/pokemon";
import {InformacionService} from '../services/modales/informacion.service';
import {EnviarPokemonService} from '../services/pokemon/enviar-pokemon.service';
import {PokemonApiService} from '../services/pokemon/pokemon-api.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-informacion',
  templateUrl: './informacion.component.html',
  styleUrl: './informacion.component.scss'
})
export class InformacionComponent implements OnInit{
  toggleInfo: boolean = false;

  pokemonsApi: PokemonApi [] = []

  constructor(
    private informacionService: InformacionService,
    private enviarPokemonService: EnviarPokemonService,
    private pokemonApiService: PokemonApiService,
    private router: Router
  ){}

  ngOnInit() {
    this.informacionService.modal$.subscribe(modal => {
      this.toggleInfo = modal
    });

    this.pokemonApiService.getAllPokemon().subscribe({
      next: data => {
        this.pokemonsApi = data.results
        console.log(this.pokemonsApi)
      },

      error: error => {
        console.log(error)

      },

      complete: () => {
        console.log("comunicación finalizada")

      }
    })
  }

  mostrarModal (pk: Pokemon) {
    this.enviarPokemonService.updatePokemon(pk)
    this.informacionService.toggleModal(true)
  }

  pokemon: Pokemon [] = [
    {id:1, nombre: "Pablo", descripcion: "Un ser legendario nacido de un rayo, Pablo domina los cielos con fuerza y agilidad. Su puño es tan poderoso que puede desatar tormentas, y su canto resuena como un trueno.", imagen_url: "https://www.endesa.com/content/dam/endesa-com/home/la-cara-e/la-era-de-la-electrificaci%C3%B3n/pokemon-3.png"},
    {id:2, nombre: "Pepe", descripcion: "Pepe fusiona la solidez de la roca con la naturaleza misma. Su cuerpo de musgo y piedra lo hace casi imparable, capaz de hacer temblar la tierra con su poder.", imagen_url: "https://i.pinimg.com/550x/73/9f/40/739f404680f7016a0d20368db5c18424.jpg"},
    {id:3, nombre: "Gustavo", descripcion: "Un ser ardiente y espectral que no puede ser apagado. Gustavo es el fuego eterno, cruzando el reino de los muertos con llamas oscuras que arrasan todo a su paso.\n" +
        "\n", imagen_url: "https://i.pinimg.com/originals/23/1e/01/231e017da27c5e4c2afecab2c441720a.jpg"},
    {id:4, nombre: "Waton", descripcion: "Protector de los océanos, Waton maneja las aguas y las mareas con su mente poderosa. Siempre sereno, sus ataques arrasan cuando se desatan.\n" +
        "\n", imagen_url: "https://i.pinimg.com/236x/22/6b/3c/226b3c986c0c428d50f7d8fec9f4e0fe.jpg"},
    {id:5, nombre: "Cojones", descripcion: "Un Pokémon de pura fuerza. Su cuerpo de acero y su voluntad inquebrantable hacen de Cojones una máquina imparable en combate.\n" +
        "\n", imagen_url: "https://images.wikidexcdn.net/mwuploads/wikidex/thumb/2/28/latest/20190709103841/Duraludon.png/800px-Duraludon.png"},
  ]

  detallesPokemon (nombre: string) {

    this.router.navigate([`detalles`])
  }



}
