import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RaisedButtonComponent } from './raised-button/raised-button.component';
import { MatButtonModule } from '@angular/material/button'
import { ThemingModule } from '../theming/theming.module';
import { ChevronButtonComponent } from './chevron-button/chevron-button.component';

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    ThemingModule
  ],
  declarations: [
    RaisedButtonComponent, 
    ChevronButtonComponent
  ],
  exports: [
    RaisedButtonComponent, 
    ChevronButtonComponent
  ]
})
export class ButtonsModule { }
