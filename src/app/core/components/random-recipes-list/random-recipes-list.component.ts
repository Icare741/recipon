import { Component } from '@angular/core';
import { RecipeService } from '../../../shared/recette-list/recette-list.service';
import { Irecipes } from 'src/app/shared/interfaces/irecipes';
import { imeals } from 'src/app/shared/interfaces/imeals';

@Component({
  selector: 'app-random-recipes-list',
  templateUrl: './random-recipes-list.component.html',
  styleUrls: ['./random-recipes-list.component.css']
})
export class RandomRecipesListComponent {
  recipes: Irecipes[] = [];

  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
    for (let i = 0; i < 10; i++) {
      this.recipeService.getRandomRecipes().subscribe((meals: imeals) => {
        this.recipes.push(meals.meals[0]);
      });
    }
  }
}

