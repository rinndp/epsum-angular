import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {PokemonDetailsComponent} from './pokemon-details/pokemon-details.component';

const routes: Routes = [
  {path: "", component: HomeComponent},
  {path: "detalles", component: PokemonDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
