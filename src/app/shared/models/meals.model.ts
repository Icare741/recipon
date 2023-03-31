import { imeals } from "../interfaces/imeals";
import { Irecipes } from "../interfaces/irecipes";

export class meals implements imeals {
    meals: Irecipes[];
    constructor(meals: Irecipes[]) {
        this.meals = meals;
    }
}