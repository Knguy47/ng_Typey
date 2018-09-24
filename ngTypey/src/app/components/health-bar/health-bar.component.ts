import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'health-bar',
  templateUrl: './health-bar.component.html',
  styleUrls: ['./health-bar.component.css']
})
export class HealthBarComponent implements OnInit {
  @Input() name: string;
  public width: number = 100;
  private hpTimer: any;

  constructor() { }

  ngOnInit() {
    this.startTimer();
  }

  startTimer = () => {
    this.hpTimer = setInterval(this.decreaseHP, 200);
  }

  stopTimer = () => {
    clearInterval(this.hpTimer);
    this.width = 100;
  }

  decreaseHP = () => {
    if(this.width <= 0) {
      this.stopTimer();
    } else {
      this.width -= 1;
    }
  }

  increaseHP = () => {
    if(this.width + 5 < 100) {
      this.width += 5;
    }
  }
}
