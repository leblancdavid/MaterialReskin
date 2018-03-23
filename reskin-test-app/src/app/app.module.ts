import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ButtonsModule } from './buttons/buttons.module';
import { ThemingDirective } from './theming/theming.directive';


@NgModule({
  declarations: [
    AppComponent,
    ThemingDirective
  ],
  imports: [
    BrowserModule,
    ButtonsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
