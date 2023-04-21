import { Component } from '@angular/core';
import { RecipeService } from '../shared/services/recette-list/recette-list.service';
import { Irecipes } from 'src/app/shared/interfaces/irecipes';
import { imeals } from 'src/app/shared/interfaces/imeals';
import { Router } from '@angular/router';

@Component({
  selector: 'app-random-recipes-list',
  templateUrl: './random-recipes-list.component.html',
  styleUrls: ['./random-recipes-list.component.css']
})
export class RandomRecipesListComponent {
  recipes: Irecipes[] = [];

  constructor(private router: Router, private recipeService: RecipeService) { }

  ngOnInit() {
    for (let i = 0; i < 8; i++) {
      this.recipeService.getRandomRecipes().subscribe((meals: imeals) => {
        this.recipes.push(meals.meals[0]);
      });
    }
  }

  goToRecipe(recipe: Irecipes) {
    const id = recipe.idMeal;
    this.router.navigate(['/recipe', id]);
  }

 
  

  
}

