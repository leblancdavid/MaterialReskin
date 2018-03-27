import { Component, OnInit, Input } from '@angular/core';
import { ColorPalette } from '../../theming/color-palette.enum';

@Component({
  selector: 'hx-chevron-button',
  templateUrl: './chevron-button.component.html',
  styleUrls: ['./chevron-button.component.scss']
})
export class ChevronButtonComponent implements OnInit {

  @Input() color: ColorPalette;
  constructor() {
    this.color = ColorPalette.Default;
   }

  ngOnInit() {
  }

}
