import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormatInstructionsPipe } from './formatInstructions/format-instructions.pipe';




@NgModule({
  declarations: [
    FormatInstructionsPipe
   
  ],
  imports: [
    CommonModule
  ],
  exports: [
    FormatInstructionsPipe

  
  ]

})
export class PipesModule { }
