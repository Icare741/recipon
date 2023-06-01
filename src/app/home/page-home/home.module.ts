import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageHomeComponent } from './page-home.component';
import { AppRoutingModule } from '../../app-routing.module';
import { CoreModule } from 'src/app/core/core.module';
import { RandomRecipesListComponent } from 'src/app/random-recipes-list/random-recipes-list.component';




@NgModule({
  declarations: [
    PageHomeComponent,
    RandomRecipesListComponent
    
    
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    CoreModule,
    
    
  ],
  exports: [
    PageHomeComponent
  ]
})
export class HomeModule { }
