import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemableDirective } from './themable.directive';
import { RandomIdGeneratorDirective } from './random-id-generator.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ThemableDirective,
    RandomIdGeneratorDirective
  ],
  exports: [
    ThemableDirective,
    RandomIdGeneratorDirective
  ],
})
export class ThemingModule { }
