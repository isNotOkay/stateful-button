import {Component, Input, OnChanges, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-stateful-button',
  templateUrl: './stateful-button.component.html',
  styleUrls: ['./stateful-button.component.scss'],
})
export class StatefulButtonComponent implements OnChanges {
  @Input() state: string;


  constructor() {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.state && changes.state.currentValue) {
      if (this.state === 'success' || this.state === 'error') {
        setTimeout(() => {
          this.state = 'idle';
        }, 800);
      }
    }
  }


}
