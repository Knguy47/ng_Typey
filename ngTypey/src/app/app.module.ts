import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { KeyboardInputComponent } from '../typerKeyboard/components/keyboard-input/keyboard-input.component'

@NgModule({
  declarations: [
    AppComponent,
    KeyboardInputComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
