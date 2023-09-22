import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private apiUrl = environment.apiUrl;
  private apiKey = environment.apiKey;
  private ts = environment.ts;
  private hash = environment.hash;

  constructor() {}

  public get(endpoint: string) {
    let url = `${this.apiUrl}/v1/public/${endpoint}?ts=${this.ts}&apikey=${this.apiKey}&hash=${this.hash}&offset=1200&limit=50`;
    return fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => data.data.results)
      .catch((error) => {
        console.error('Error fetching character data:', error);
        throw error;
      });
  }

  public getById(endpoint: string, id: string) {
    let url = `${this.apiUrl}/v1/public/${endpoint}/${id}?ts=${this.ts}&apikey=${this.apiKey}&hash=${this.hash}`;
    return fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => data.data.results)
      .catch((error) => {
        console.error('Error fetching character data:', error);
        throw error;
      });
  }

  public getCharacterFeatures(
    endpoint: string,
    id: string,
    feature: string,
    limit: number
  ) {
    let url = `${this.apiUrl}/v1/public/${endpoint}/${id}/${feature}?ts=${this.ts}&apikey=${this.apiKey}&hash=${this.hash}&limit=${limit}`;
    return fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => data.data.results)
      .catch((error) => {
        console.error('Error fetching character data:', error);
        throw error;
      });
  }
}
