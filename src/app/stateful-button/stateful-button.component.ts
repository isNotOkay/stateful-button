import {Component, EventEmitter, Input, Output} from '@angular/core';
import {StatefulButtonState} from './statefulButtonState';

@Component({
  selector: 'app-stateful-button',
  templateUrl: './stateful-button.component.html',
  styleUrls: ['./stateful-button.component.scss'],
})
export class StatefulButtonComponent {
  @Input() label = 'Label';
  /**
   * Specifies how long the result state is being displayed before returning back to the IDLE state.
   */
  @Input() resultStateDuration = 650;
  @Output() stateChange: EventEmitter<StatefulButtonState> = new EventEmitter<StatefulButtonState>();

  // Make this enum accessible in the html template.
  public StatefulButtonState = StatefulButtonState;
  private state: StatefulButtonState;

  constructor() {
    this.state = StatefulButtonState.idle;
  }

  public busy() {
    this.state = StatefulButtonState.busy;
    this.stateChange.emit(StatefulButtonState.busy);
  }

  public success() {
    this.state = StatefulButtonState.success;
    this.stateChange.emit(StatefulButtonState.success);
    this.idle();
  }

  public error() {
    this.state = StatefulButtonState.error;
    this.stateChange.emit(StatefulButtonState.error);
    this.idle();
  }

  /**
   * Switch back to IDLE state after the desired timeout has passed.
   */
  private idle() {
    setTimeout(() => {
      this.state = StatefulButtonState.idle;
      this.stateChange.emit(StatefulButtonState.idle);
    }, this.resultStateDuration);
  }
}
