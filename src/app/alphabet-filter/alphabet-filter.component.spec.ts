import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlphabetFilterComponent } from './alphabet-filter.component';

describe('AlphabetFilterComponent', () => {
  let component: AlphabetFilterComponent;
  let fixture: ComponentFixture<AlphabetFilterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AlphabetFilterComponent]
    });
    fixture = TestBed.createComponent(AlphabetFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
