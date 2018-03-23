import { Component, OnInit } from '@angular/core';
import { ColorPalette } from '../../theming/color-palette.enum';

@Component({
  selector: 'hx-raised-button',
  templateUrl: './raised-button.component.html',
  styleUrls: ['./raised-button.component.scss']
})
export class RaisedButtonComponent implements OnInit {

  private colorPalette: ColorPalette;
  constructor() { }

  ngOnInit() {
    this.colorPalette = ColorPalette.Secondary;
  }

}
