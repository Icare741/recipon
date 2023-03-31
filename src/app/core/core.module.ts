import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from './components/nav/nav.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { SharedModule } from '../shared/shared.module';
import { RandomRecipesListComponent } from './components/random-recipes-list/random-recipes-list.component';






@NgModule({
  declarations: [


    NavComponent,
    FooterComponent,
    HeaderComponent,
    RandomRecipesListComponent,

  ],
  imports: [
    CommonModule,
    SharedModule,
    
  ],
  exports: [
    NavComponent,
    FooterComponent,
    HeaderComponent,
    RandomRecipesListComponent,

  ]
})
export class CoreModule { }
