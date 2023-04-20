import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageHomeComponent } from './page-home.component';
import { AppRoutingModule } from '../../app-routing.module';
import { CoreModule } from 'src/app/core/core.module';




@NgModule({
  declarations: [
    PageHomeComponent,
    
    
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
