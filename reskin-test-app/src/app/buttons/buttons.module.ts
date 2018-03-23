import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RaisedButtonComponent } from './raised-button/raised-button.component';
import { MatButtonModule } from '@angular/material/button'
import { ThemingModule } from '../theming/theming.module';

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    ThemingModule
  ],
  declarations: [RaisedButtonComponent],
  exports: [RaisedButtonComponent]
})
export class ButtonsModule { }
