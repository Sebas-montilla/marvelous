import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-alphabet-filter',
  templateUrl: './alphabet-filter.component.html',
  styleUrls: ['./alphabet-filter.component.css']
})
export class AlphabetFilterComponent {
  alphabet: string[] = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
  selectedLetter: string | null = null;
  
  @Output() letterSelected = new EventEmitter<string>();

  selectLetter(letter: string) {
    this.selectedLetter = letter;
    this.letterSelected.emit(letter);
  }
}
