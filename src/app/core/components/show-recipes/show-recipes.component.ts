import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Irecipes } from 'src/app/shared/interfaces/irecipes';

import { RecipeService } from 'src/app/shared/recette-list/recette-list.service';
import { imeals } from 'src/app/shared/interfaces/imeals';



@Component({
  selector: 'app-show-recipes',
  templateUrl: './show-recipes.component.html',
  styleUrls: ['./show-recipes.component.css']
})
export class ShowRecipesComponent implements OnInit{

  recipe!: imeals;
  

  constructor(private route: ActivatedRoute, private recipeService: RecipeService) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      this.recipeService.getRecipeById(id!).subscribe((recipe: imeals) => {
        this.recipe = recipe;
        console.log(this.recipe.meals[0]);
      }
      );

    });

  }

}
