import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageHomeComponent } from './home/page-home/page-home.component';
import { ShowRecipesComponent } from './core/components/show-recipes/show-recipes.component';
import { NotFoundGuard } from './guards/not-found-guard.guard';
import { NotFoundComponent } from './errors/not-found/not-found.component';

const routes: Routes = [
  { path: '', component: PageHomeComponent },
  { path: 'recipe/:id', component: ShowRecipesComponent },
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
