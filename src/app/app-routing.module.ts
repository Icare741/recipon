import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageHomeComponent } from './home/page-home/page-home.component';
import { ShowRecipesComponent } from './show-recipes/show-recipes.component';
import { NotFoundComponent } from './errors/not-found/not-found.component';
import { HelpComponentComponent } from './core/components/help-component/help-component.component';

const routes: Routes = [
  { path: '', component: PageHomeComponent },
  { path: 'recipe/:id', component: ShowRecipesComponent },
  {path : 'help', component: HelpComponentComponent},
  { path: '404', component: NotFoundComponent },
 
  {
    path: '**',
    redirectTo: '/404',
    pathMatch: 'full'
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
