import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CharactersComponent } from './characters/characters.component';
import { CharactersDetailComponent } from './characters-detail/characters-detail.component';
import { CharacterComicsComponent } from './character-comics/character-comics.component';
import { CharacterSeriesComponent } from './character-series/character-series.component';

const routes: Routes = [
  {
    path: 'characters',
    component: CharactersComponent,
  },
  { path: 'characters/:id', component: CharactersDetailComponent },
  { path: 'characters/:id/comics', component: CharacterComicsComponent },
  { path: 'characters/:id/series', component: CharacterSeriesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
