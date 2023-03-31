import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Irecipes } from '../interfaces/irecipes';
import { imeals } from '../interfaces/imeals';
import { meals } from '../models/meals.model';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  private apiUrl = 'https://www.themealdb.com/api/json/v1/1/random.php';

  constructor(private http: HttpClient) { }

  getRandomRecipes(): Observable<imeals> {
    return this.http.get<imeals>(this.apiUrl);
  }
}
