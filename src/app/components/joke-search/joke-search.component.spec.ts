import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JokeSearchComponent } from './joke-search.component';

describe('JokeSearchComponent', () => {
  let component: JokeSearchComponent;
  let fixture: ComponentFixture<JokeSearchComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [JokeSearchComponent]
    });
    fixture = TestBed.createComponent(JokeSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
