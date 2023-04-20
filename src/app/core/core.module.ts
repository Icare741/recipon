import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from './components/nav/nav.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { SharedModule } from '../shared/shared.module';
import { RandomRecipesListComponent } from './components/random-recipes-list/random-recipes-list.component';
import { ShowRecipesComponent } from './components/show-recipes/show-recipes.component';
import { PipesModule } from '../pipes/pipes.module';
import { FormatInstructionsPipe } from '../pipes/formatInstructions/format-instructions.pipe';







@NgModule({
  declarations: [


    NavComponent,
    FooterComponent,
    HeaderComponent,
    RandomRecipesListComponent,
    ShowRecipesComponent,
 
    

  ],
  imports: [
    CommonModule,
    SharedModule,
    PipesModule,
    

    
   
    
  ],
  exports: [
    NavComponent,
    FooterComponent,
    HeaderComponent,
    RandomRecipesListComponent,
    ShowRecipesComponent,
    FormatInstructionsPipe

  ]
})
export class CoreModule { }
