import { Component, OnInit, Input, ElementRef } from '@angular/core';
import { ColorPalette } from '../../theming/color-palette.enum';
import { Guid } from '../../theming/guid';

@Component({
  selector: 'hx-chevron-button',
  templateUrl: './chevron-button.component.html',
  styleUrls: ['./chevron-button.component.scss']
})
export class ChevronButtonComponent implements OnInit {

  private fillId = Guid.newGuid();
  private getFillIdUrl() {
    return 'url(#' + this.fillId + ')';
  }
  @Input() color: ColorPalette;
  private advance: boolean;

  @Input() disabled: boolean;

  constructor(private elementRef: ElementRef) {
    this.advance = true;
    if(elementRef.nativeElement.hasAttribute('hx-chevron-back')) {
      this.advance = false;
    }
    else if(elementRef.nativeElement.hasAttribute('hx-chevron-next')) {
      this.advance = true;
    }
    //attributes.some(attribute => this._getHostElement().hasAttribute(attribute));
    this.color = ColorPalette.Default;
   }

  ngOnInit() {
  }

}
