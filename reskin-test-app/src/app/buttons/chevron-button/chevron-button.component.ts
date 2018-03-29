import { Component, OnInit, Input } from '@angular/core';
import { ColorPalette } from '../../theming/color-palette.enum';
import { Guid } from '../../theming/guid';

@Component({
  selector: 'hx-chevron-button',
  templateUrl: './chevron-button.component.html',
  styleUrls: ['./chevron-button.component.scss']
})
export class ChevronButtonComponent implements OnInit {

  private uniqueId = Guid.newGuid();
  private getUniqueIdUrl() {
    return 'url(#' + this.uniqueId + ')';
  }
  @Input() color: ColorPalette;
  constructor() {
    this.color = ColorPalette.Default;
   }

  ngOnInit() {
  }

}
