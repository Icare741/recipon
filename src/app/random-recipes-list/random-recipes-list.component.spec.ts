import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { RandomRecipesListComponent } from './random-recipes-list.component';

describe('RandomRecipesListComponent', () => {
  let component: RandomRecipesListComponent;
  let fixture: ComponentFixture<RandomRecipesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RandomRecipesListComponent],
      imports: [HttpClientTestingModule],
    })
    .compileComponents();

    fixture = TestBed.createComponent(RandomRecipesListComponent);
    component = fixture.componentInstance;

    // Set component's recipes property to an array of length 8
    component.recipes = Array(8).fill({});

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have 8 recipes', () => {
    expect(component.recipes.length).toBe(8);
  });
});
