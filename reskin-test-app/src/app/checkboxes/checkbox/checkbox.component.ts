import { Component, OnInit } from '@angular/core';
import { ColorPalette } from '../../theming/color-palette.enum';

@Component({
  selector: 'hx-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss']
})
export class CheckboxComponent implements OnInit {

  private color: ColorPalette;
  constructor() { 
    this.color = ColorPalette.Primary;
  }

  ngOnInit() {
  }

}
