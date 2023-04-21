import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeModule } from './home/page-home/home.module';
import { CoreModule } from './core/core.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NotFoundComponent } from './errors/not-found/not-found.component';
import { pipe } from 'rxjs';
import { PipesModule } from './pipes/pipes.module';
import { FormatInstructionsPipe } from './pipes/formatInstructions/format-instructions.pipe';
import { ShowRecipesComponent } from './show-recipes/show-recipes.component';
import { SearchByNameComponent } from './search-by-name/search-by-name.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
    ShowRecipesComponent,
    SearchByNameComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule,
    CoreModule,
    BrowserAnimationsModule,
    PipesModule,
    RouterModule
    

  ],
exports: [
  FormatInstructionsPipe
],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
