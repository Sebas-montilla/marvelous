import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-character-series',
  templateUrl: './character-series.component.html',
  styleUrls: ['./character-series.component.css'],
})
export class CharacterSeriesComponent {
  characterSeries: any[] = []; 

  constructor(private apiService: ApiService, private route: ActivatedRoute) {}

  ngOnInit() {
    const characterId = this.route.snapshot.paramMap.get('id');

    this.apiService
      .getCharacterFeatures('characters', characterId as string, 'series', 100)
      .then((response) => {
        this.characterSeries = response;
      })
      .catch((error) => console.log(error));
  }
}
