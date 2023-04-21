import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { CommonModule } from '@angular/common';

import { ShowRecipesComponent } from './show-recipes.component';
import { RecipeService } from 'src/app/shared/services/recette-list/recette-list.service';
import { imeals } from 'src/app/shared/interfaces/imeals';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { of } from 'rxjs';
import { PipesModule } from '../pipes/pipes.module';

describe('ShowRecipesComponent', () => {
  let component: ShowRecipesComponent;
  let fixture: ComponentFixture<ShowRecipesComponent>;
  let recipeServiceSpy: jasmine.SpyObj<RecipeService>;

  beforeEach(async () => {
    const spy = jasmine.createSpyObj('RecipeService', ['getRecipeById']);

    await TestBed.configureTestingModule({
      declarations: [ShowRecipesComponent],

      imports: [RouterTestingModule, CommonModule,PipesModule],
      providers: [
        { provide: RecipeService, useValue: spy },
        DomSanitizer,
      ],
    }).compileComponents();

    recipeServiceSpy = TestBed.inject(RecipeService) as jasmine.SpyObj<RecipeService>;
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowRecipesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set the recipe when the component is initialized', () => {
    const recipe: imeals = {
      meals: [
        {
          idMeal: '1',
          strMeal: 'Spaghetti',
          strCategory: 'Pasta',
          strArea: 'Italian',
          strInstructions: 'Cook spaghetti in boiling water for 10 minutes. Drain and serve with your favorite sauce.',
          strMealThumb: 'https://www.themealdb.com/images/media/meals/1abc181e-7347-4070-89e7-3c307deee6a9.jpg',
          strYoutube: 'https://www.youtube.com/watch?v=NVkZXQ-jZ-s',
        },
      ],
    };
    recipeServiceSpy.getRecipeById.and.returnValue(of(recipe));

    component.ngOnInit();

    expect(component.recipe).toEqual(recipe);
    expect(component.strmeal).toEqual(recipe.meals[0].strMeal);
    expect(component.strcategory).toEqual(recipe.meals[0].strCategory);
    expect(component.strarea).toEqual(recipe.meals[0].strArea);
    expect(component.strinstructions).toEqual(recipe.meals[0].strInstructions);
    expect(component.strmealthumb).toEqual(recipe.meals[0].strMealThumb);
    expect(component.stryoutube).toBeTruthy();
  });

});
