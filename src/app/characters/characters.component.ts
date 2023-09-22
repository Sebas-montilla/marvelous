// src/app/characters/characters.component.ts
import { Component } from '@angular/core';
import { ApiService } from '../service/api.service';
import { Character } from '../service/api.models';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css'],
})
export class CharactersComponent {
  characters: Character[] = [];
  p: number = 1;
  filteredCharacters: Character[] = [];
  selectedLetter: string | null = null;
  searchQuery: string = ''; 

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.apiService
      .get('characters')
      .then((response) => {
        this.characters = response;
        this.filteredCharacters = response
      })
      .catch((err) => console.log(err));
  }

  filterCharactersByLetter(letter: string) {
    this.selectedLetter = letter;
    this.filteredCharacters = this.characters.filter((character) =>
      character.name.startsWith(letter)
    );
  }

  filterCharactersBySearch(query: string) {
    this.searchQuery = query.toLowerCase();
    this.filteredCharacters = this.characters.filter(character =>
      character.name.toLowerCase().includes(this.searchQuery)
    );
  }
}
