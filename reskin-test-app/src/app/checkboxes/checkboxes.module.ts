import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CheckboxComponent } from './checkbox/checkbox.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { ThemingModule } from '../theming/theming.module';

@NgModule({
  imports: [
    CommonModule,
    MatCheckboxModule,
    ThemingModule
  ],
  declarations: [CheckboxComponent],
  exports: [CheckboxComponent]
})
export class CheckboxesModule { }
