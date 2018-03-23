import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {BrowserAnimationsModule, NoopAnimationsModule} from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
// import { ButtonsModule } from './buttons/buttons.module';
// import { ThemingModule } from './theming/theming.module';
// import { CheckboxesModule } from './checkboxes/checkboxes.module';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatProgressBarModule } from '@angular/material/progress-bar';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    // ButtonsModule,
    // CheckboxesModule,
    // ThemingModule,
    MatCheckboxModule,
    MatProgressBarModule,
    NoopAnimationsModule
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
