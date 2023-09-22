import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterComicsComponent } from './character-comics.component';

describe('CharacterComicsComponent', () => {
  let component: CharacterComicsComponent;
  let fixture: ComponentFixture<CharacterComicsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CharacterComicsComponent]
    });
    fixture = TestBed.createComponent(CharacterComicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
