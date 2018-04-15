import { Component } from '@angular/core';
import { ColorPalette } from './theming/color-palette.enum';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  colors = ColorPalette

  buttonClicked(event: Event) {
    console.log(event);
  }
}

