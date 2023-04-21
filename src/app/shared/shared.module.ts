import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RecipeService } from './services/recette-list/recette-list.service';

@NgModule({
  declarations: [
    
  ],
  imports: [
    CommonModule,
    HttpClientModule,
  ],
  providers: [
    RecipeService 
  ]
})
export class SharedModule { }
