import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ButtonsModule } from './buttons/buttons.module';
import { ThemingModule } from './theming/theming.module';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    ButtonsModule,
    ThemingModule
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
