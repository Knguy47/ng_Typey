import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { KeyboardInputComponent } from './components/typerKeyboard/keyboard-input/keyboard-input.component';
import { HealthBarComponent } from './components/health-bar/health-bar.component';
import { AppDisplayerComponent } from './components/app-displayer/app-displayer.component';
import { PlayerComponent } from './components/player/player.component';

@NgModule({
  declarations: [
    AppComponent,
    KeyboardInputComponent,
    HealthBarComponent,
    AppDisplayerComponent,
    PlayerComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
