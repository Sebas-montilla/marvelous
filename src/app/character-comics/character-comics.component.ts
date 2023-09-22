import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-character-comics',
  templateUrl: './character-comics.component.html',
  styleUrls: ['./character-comics.component.css'],
})
export class CharacterComicsComponent {
  characterComics: any[] = [];

  constructor(private apiService: ApiService, private route: ActivatedRoute) {}

  ngOnInit() {
    const characterId = this.route.snapshot.paramMap.get('id');

    this.apiService
      .getCharacterFeatures('characters', characterId as string, 'comics', 100)
      .then((response) => {
        this.characterComics = response;
      })
      .catch((error) => console.log(error));
  }
}
