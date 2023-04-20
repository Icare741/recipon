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

        const formattedSteps = this.formatInstructions(this.strinstructions);
        this.strinstructions = `<ul>${formattedSteps.join('')}</ul>`;
     
      }
      );

    });

  }
  goBack() {
    this.router.navigate(['']); // or use navigateBack() if you want to go back in history
  }

  formatInstructions(instructions: string): string[] {
    // Supprime les points et les deux-points
    instructions = instructions.replace(/[.:]/g, '');
    // Sépare les instructions par saut de ligne
    const steps = instructions.split('\r\n');
    // Supprime les instructions vides
    const filteredSteps = steps.filter(step => step.trim() !== '');
    // Détermine le type de liste
    const listType = instructions.includes('<ol>') ? 'ol' : 'ul';
    // Retourne les étapes formatées avec une police personnalisée et les balises de liste
    const formattedSteps = filteredSteps.map((step, index) => `<li style="font-family: Arial, sans-serif"><strong class="text-yellow-500">Etape ${index + 1} : </strong> ${step.trim()}</li>`);
    const listWithDesign = formattedSteps.join('<br><br>');
    return [`<${listType}>${listWithDesign}</${listType}>`];
  }
  

  

  

}
