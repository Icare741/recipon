import { Irecipes } from "../interfaces/irecipes";




export class RecipesModel implements Irecipes {
  
    strMeal: string;
    strMealThumb: string;
    idMeal: string;
    strCategory!: string;
    strArea!: string;
    strInstructions!: string;
    strYoutube!: string;

    
    constructor(strMeal: string, strMealThumb: string, idMeal: string , strCategory: string, strArea: string, strInstructions: string, strYoutube: string) {
        this.strMeal = strMeal;
        this.strMealThumb = strMealThumb;
        this.idMeal = idMeal;
    }
}