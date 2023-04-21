import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Irecipes } from '../shared/interfaces/irecipes';

@Component({
  selector: 'app-search-by-name',
  templateUrl: './search-by-name.component.html',
  styleUrls: ['./search-by-name.component.css']
})
export class SearchByNameComponent implements OnInit {
  recipes: Irecipes[] = [];
  searchedRecipes!: any[];

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    const recipes = history.state.recipes;
    if (recipes) {
      this.recipes = recipes;
    } else {
      this.route.paramMap.subscribe((params) => {
        const name = params.get('name');
        console.log(name);
      });
    }
  }
  goToRecipe(id: string): void {
    console.log(id);
  
  }
}
