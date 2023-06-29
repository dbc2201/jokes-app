import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JokeListManagerComponent } from './joke-list-manager.component';

describe('JokeListManagerComponent', () => {
  let component: JokeListManagerComponent;
  let fixture: ComponentFixture<JokeListManagerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [JokeListManagerComponent]
    });
    fixture = TestBed.createComponent(JokeListManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
