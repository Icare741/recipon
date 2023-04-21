import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { imeals } from 'src/app/shared/interfaces/imeals';
import { Irecipes } from 'src/app/shared/interfaces/irecipes';
import { RecipeService } from 'src/app/shared/services/recette-list/recette-list.service';


@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {

  menuOpen = false;
  recipes: Irecipes[] = [];
  searchTerm!: string;
  constructor(private router: Router, private recipeService: RecipeService) { }

openMenu() {
  this.menuOpen = !this.menuOpen;
}
goHelp() {
  this.router.navigate(['/help']); // or use navigateBack() if you want to go back in history
} 
goHome() {
  this.router.navigate(['']); // or use navigateBack() if you want to go back in history
}
search(): void {
  this.recipeService.getRecipeByName(this.searchTerm).subscribe((meals) => {
    if (meals.meals) {
      const recipes = meals.meals;
      this.router.navigate(['/recipe/search', this.searchTerm], { state: { recipes } });
    }
  });
}
}

