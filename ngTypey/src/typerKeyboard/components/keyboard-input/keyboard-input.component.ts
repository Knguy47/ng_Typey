import { Component, OnInit, HostListener} from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'typerKeyboard-keyboard-input',
  templateUrl: './keyboard-input.component.html',
  styleUrls: ['./keyboard-input.component.css']
})
export class KeyboardInputComponent implements OnInit {
  key: string;
  sentence: string;
  showWin: boolean;

  profileForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
  });

  constructor() { 
    this.key = '';
    this.sentence = 'christina does not hate my dress';
    this.showWin = false;
  }

  ngOnInit() {
  }

  @HostListener('document:keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) { 
    if(event.keyCode === 8) {
      this.key = this.key.slice(0, -1);
    } else {
      this.key += event.key;
    }

    if(this.sentence.substring(0, 1) === event.key) {
      this.sentence = this.sentence.substring(1);
      if(this.sentence.length === 0) {
        this.showWin = true;
      }
    }
  }
}
