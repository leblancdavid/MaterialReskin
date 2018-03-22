import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RaisedButtonComponent } from './raised-button/raised-button.component';
import {MatButtonModule} from '@angular/material/button'

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule
  ],
  declarations: [RaisedButtonComponent],
  exports: [RaisedButtonComponent]
})
export class ButtonsModule { }
