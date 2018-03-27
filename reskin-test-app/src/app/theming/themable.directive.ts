import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';
import { ColorPalette } from './color-palette.enum';

@Directive({
  selector: '[hxThemable]'
})
export class ThemableDirective implements OnInit {

  @Input() hxThemable: ColorPalette;
  constructor(private renderer: Renderer2, private hostElement: ElementRef) 
  {
  }

  ngOnInit(): void {
    switch(this.hxThemable)
    {
      case ColorPalette.Default:
        this.renderer.addClass(this.hostElement.nativeElement, 'hx-default-color');
        break;
      case ColorPalette.Error:
        this.renderer.addClass(this.hostElement.nativeElement, 'hx-error-color');
        break;
      case ColorPalette.Primary:
        this.renderer.addClass(this.hostElement.nativeElement, 'hx-primary-color');
        break;
      case ColorPalette.Secondary:
        this.renderer.addClass(this.hostElement.nativeElement, 'hx-secondary-color');
        break;
      case ColorPalette.Success:
        this.renderer.addClass(this.hostElement.nativeElement, 'hx-success-color');
        break;
      case ColorPalette.Warning:
        this.renderer.addClass(this.hostElement.nativeElement, 'hx-warning-color');
        break;
      case ColorPalette.None:
        break;
    }
    
  }

}
