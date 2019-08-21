import {Component, Input} from '@angular/core';
import {StatefulButtonState} from './statefulButtonState';

@Component({
  selector: 'app-stateful-button',
  templateUrl: './stateful-button.component.html',
  styleUrls: ['./stateful-button.component.scss'],
})
export class StatefulButtonComponent {
  @Input() public state: StatefulButtonState;
  // Make this enum accessible in the html template.
  public StatefulButtonState = StatefulButtonState;

  constructor() {
  }
}
