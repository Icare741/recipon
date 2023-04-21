import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from './components/nav/nav.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { SharedModule } from '../shared/shared.module';
import { FormatInstructionsPipe } from '../pipes/formatInstructions/format-instructions.pipe';
import { HelpComponentComponent } from './components/help-component/help-component.component';







@NgModule({
  declarations: [


    NavComponent,
    FooterComponent,
    HeaderComponent,
    HelpComponentComponent,
 
    

  ],
  imports: [
    CommonModule,
    SharedModule,
  
  ],
  exports: [
    NavComponent,
    FooterComponent,
    HeaderComponent,
    HelpComponentComponent,

  ]
})
export class CoreModule { }
