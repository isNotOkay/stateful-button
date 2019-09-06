import {Component, Input} from '@angular/core';
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
  /**
   * Specifies the duration of the state transition from BUSY to SUCCESS/ERROR.
   * Use this to have a smoother transition for requests that have a very low latency.
   */
  @Input() busyToResultStateDelay = 650;
  // Make this enum accessible in the html template.
  public StatefulButtonState = StatefulButtonState;
  private state: StatefulButtonState;

  constructor() {
    this.state = StatefulButtonState.idle;
  }

  public busy() {
    this.state = StatefulButtonState.busy;
  }

  public success() {
    setTimeout(() => {
      this.state = StatefulButtonState.success;
      this.idle();
    }, this.busyToResultStateDelay);
  }

  public error() {
    setTimeout(() => {
      this.state = StatefulButtonState.error;
      this.idle();
    }, this.busyToResultStateDelay);
  }

  /**
   * Switch back to IDLE state after the desired timeout has passed.
   */
  private idle() {
    setTimeout(() => {
      this.state = StatefulButtonState.idle;
    }, this.resultStateDuration);
  }
}
