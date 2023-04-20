import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RecipeService } from 'src/app/shared/services/recette-list/recette-list.service';
import { imeals } from 'src/app/shared/interfaces/imeals';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Router } from '@angular/router';





@Component({
  selector: 'app-show-recipes',
  templateUrl: './show-recipes.component.html',
  styleUrls: ['./show-recipes.component.css']
})
export class ShowRecipesComponent implements OnInit{

  recipe!: imeals;
  strmeal!: string;
  strcategory!: string;
  strarea!: string;
  strinstructions!: string;
  strmealthumb!: string;
  stryoutube!: SafeResourceUrl;

  constructor(
    private route: ActivatedRoute, 
    private recipeService: RecipeService,
    private sanitizer: DomSanitizer, 
    private router: Router
    ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      this.recipeService.getRecipeById(id!).subscribe((recipe: imeals) => {
        this.recipe = recipe;
        console.log(this.recipe.meals[0]);
        this.strmeal = this.recipe.meals[0].strMeal;
        this.strcategory = this.recipe.meals[0].strCategory;
        this.strarea = this.recipe.meals[0].strArea;
        this.strinstructions = this.recipe.meals[0].strInstructions;
        this.strmealthumb = this.recipe.meals[0].strMealThumb;
        this.stryoutube = this.sanitizer.bypassSecurityTrustResourceUrl(this.recipe.meals[0].strYoutube.replace("watch?v=", "embed/")); 
        console.log(this.stryoutube);
     
      }
      );

    });

  }
  goBack() {
    this.router.navigate(['']); // or use navigateBack() if you want to go back in history
  }

}
