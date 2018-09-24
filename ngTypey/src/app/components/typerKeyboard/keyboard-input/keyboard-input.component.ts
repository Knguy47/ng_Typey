import { Component, OnInit, HostListener} from '@angular/core';

@Component({
  selector: 'typerKeyboard-keyboard-input',
  templateUrl: './keyboard-input.component.html',
  styleUrls: ['./keyboard-input.component.css']
})
export class KeyboardInputComponent implements OnInit {
  key: string;
  sentence: string;
  showWin: boolean;

  constructor() { 
    this.key = '';
    this.sentence = 'christina does not hate my dress';
    this.showWin = false;
  }

  ngOnInit() {
  }

  @HostListener('document:keypress', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) { 
    debugger
    if(event.keyCode === 8) {
      this.key = this.key.slice(0, -1);
    } else if (event.key === this.sentence.substring(0,1)){
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
