import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemingDirective } from './theming.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ThemingDirective
  ],
  exports: [
    ThemingDirective
  ],
})
export class ThemingModule { }
