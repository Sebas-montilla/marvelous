import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ApiService } from './service/api.service';
import { HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from './navbar/navbar.component';
import { CharactersComponent } from './characters/characters.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxPaginationModule } from 'ngx-pagination';
import { AlphabetFilterComponent } from './alphabet-filter/alphabet-filter.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { CharactersDetailComponent } from './characters-detail/characters-detail.component';
import { CharacterComicsComponent } from './character-comics/character-comics.component';
import { CharacterSeriesComponent } from './character-series/character-series.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CharactersComponent,
    AlphabetFilterComponent,
    SearchBarComponent,
    CharactersDetailComponent,
    CharacterComicsComponent,
    CharacterSeriesComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgxPaginationModule,
    FormsModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
