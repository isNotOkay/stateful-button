import {Component, Input, OnChanges, SimpleChanges} from '@angular/core';
import {StatefulButtonState} from './statefulButtonState';

@Component({
  selector: 'app-stateful-button',
  templateUrl: './stateful-button.component.html',
  styleUrls: ['./stateful-button.component.scss'],
})
export class StatefulButtonComponent implements OnChanges {
  @Input() public state: StatefulButtonState;
  public StatefulButtonState = StatefulButtonState;

  constructor() {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.state && changes.state.currentValue) {
      if (this.state === StatefulButtonState.success || this.state === StatefulButtonState.error) {
        setTimeout(() => {
          this.state = StatefulButtonState.idle;
        }, 800);
      }
    }
  }

}
