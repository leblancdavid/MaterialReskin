import { Component, OnInit, Input } from '@angular/core';
import { ColorPalette } from '../../theming/color-palette.enum';

@Component({
  selector: 'hx-raised-button',
  templateUrl: './raised-button.component.html',
  styleUrls: ['./raised-button.component.scss']
})
export class RaisedButtonComponent implements OnInit {

  @Input() color: ColorPalette;
  constructor() {
    this.color = ColorPalette.Default;
   }

  ngOnInit() {
  }

}
