import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../service/api.service';
import { Character } from '../service/api.models';

@Component({
  selector: 'app-characters-detail',
  templateUrl: './characters-detail.component.html',
  styleUrls: ['./characters-detail.component.css'],
})
export class CharactersDetailComponent {
  character: Character[] = [];
  characterComics: any[] = [];
  characterSeries: any[] = [];

  constructor(private apiService: ApiService, private route: ActivatedRoute) {}

  ngOnInit() {
    const characterId = this.route.snapshot.paramMap.get('id');

    this.apiService
      .getById('characters', characterId as string)
      .then((response) => {
        this.character = response;
      })
      .catch((err) => console.log(err));

    this.apiService
      .getCharacterFeatures('characters', characterId as string, 'comics', 5)
      .then((response) => {
        this.characterComics = response;
      })
      .catch((err) => console.log(err));

    this.apiService
      .getCharacterFeatures('characters', characterId as string, 'series', 5)
      .then((response) => {
        this.characterSeries = response;
      })
      .catch((err) => console.log(err));
  }
}
