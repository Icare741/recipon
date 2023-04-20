import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageHomeComponent } from './home/page-home/page-home.component';
import { ShowRecipesComponent } from './core/components/show-recipes/show-recipes.component';

const routes: Routes = [
  { path: '', component: PageHomeComponent },
  { path: 'recipe/:id', component: ShowRecipesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
