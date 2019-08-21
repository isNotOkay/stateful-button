import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
  MatButtonModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatProgressSpinnerModule
} from '@angular/material';
import {FlexLayoutModule} from '@angular/flex-layout';
import {moduleMetadata, storiesOf} from '@storybook/angular';
import {radios, withKnobs} from '@storybook/addon-knobs';
import {StatefulButtonComponent} from '../src/app/stateful-button/stateful-button.component';
import {StatefulButtonState} from "../src/app/stateful-button/statefulButtonState";

const states = {
  Idle: StatefulButtonState.idle,
  Busy: StatefulButtonState.busy,
  Success: StatefulButtonState.success,
  Error: StatefulButtonState.error
};

storiesOf('Storybook Knobs', module)
  .addDecorator(withKnobs)
  .addDecorator(
    moduleMetadata({
      declarations: [
        StatefulButtonComponent
      ],
      imports: [
        BrowserModule,
        BrowserAnimationsModule,
        FlexLayoutModule,
        MatButtonModule,
        MatIconModule,
        MatInputModule,
        MatFormFieldModule,
        MatProgressSpinnerModule
      ],
    }))
  .add('interactive', () => ({
    component: StatefulButtonComponent,
    props: {
      state: radios('state', states, states.Idle, {
        display: 'inline-radio'
      },)
    },
  }))
  .add('idle', () => ({
    component: StatefulButtonComponent,
    props: {
      state: StatefulButtonState.idle
    },
  }))
  .add('busy', () => ({
    component: StatefulButtonComponent,
    props: {
      state: StatefulButtonState.busy
    },
  }))
  .add('error', () => ({
    component: StatefulButtonComponent,
    props: {
      state: StatefulButtonState.error
    },
  }))
  .add('success', () => ({
    component: StatefulButtonComponent,
    props: {
      state: StatefulButtonState.success
    },
  }));

