import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RandomRecipesListComponent } from './random-recipes-list.component';

describe('RandomRecipesListComponent', () => {
  let component: RandomRecipesListComponent;
  let fixture: ComponentFixture<RandomRecipesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RandomRecipesListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RandomRecipesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

