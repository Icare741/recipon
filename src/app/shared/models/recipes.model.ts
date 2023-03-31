import { Irecipes } from "../interfaces/irecipes";


export class RecipesModel implements Irecipes {
    strMeal: string;
    strMealThumb: string;
    constructor(strMeal: string, strMealThumb: string) {
        this.strMeal = strMeal;
        this.strMealThumb = strMealThumb;
    }
}