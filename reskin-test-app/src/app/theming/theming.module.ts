import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemableDirective } from './themable.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ThemableDirective
  ],
  exports: [
    ThemableDirective
  ],
})
export class ThemingModule { }
