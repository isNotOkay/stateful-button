import {storiesOf, moduleMetadata} from '@storybook/angular';
import {withKnobs, text, boolean, number, select, radios} from '@storybook/addon-knobs';

/*import '@storybook/addon-knobs/register';*/
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
  MatButtonModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatProgressSpinnerModule
} from '@angular/material';
import {StatefulButtonComponent} from '../src/app/stateful-button/stateful-button.component';
import {FlexLayoutModule} from '@angular/flex-layout';
import {AppComponent} from '../src/app/app.component';
import {RegistrationComponent} from '../src/app/registration/registration.component';

const states = {
  Idle: 'idle',
  Busy: 'busy',
  Success: 'success',
  Error: 'error'
};

const label = 'States';
const valuesObj = {
  Idle: 'idle',
  Busy: 'busy',
  Success: 'success',
  Error: 'error'
};
const defaultValue = 'idle';
const optionsObj = {
  display: 'inline-radio'
};

const stories = storiesOf('Storybook Knobs', module);
stories.addDecorator(withKnobs);
stories.addDecorator(
  moduleMetadata({
    declarations: [
      StatefulButtonComponent
    ],
    imports: [
      BrowserModule,
      BrowserAnimationsModule,
      MatFormFieldModule,
      MatInputModule,
      MatIconModule,
      FlexLayoutModule,
      MatButtonModule,
      MatProgressSpinnerModule
    ],
  }))
  .add('registration', () => ({
    component: RegistrationComponent,
  }))
  .add('interactive', () => ({
    template: `<app-stateful-button [state]="state"></app-stateful-button>`,
    props: {
      //state: select('state', states,states.Idle)
      state: radios('state', states, states.Idle, {
        display: 'inline-radio'
      },)
    },
  }))
  .add('idle', () => ({
    component: StatefulButtonComponent,
    props: {
      state: 'idle'
    },
  }))
  .add('busy', () => ({
    component: StatefulButtonComponent,
    props: {
      state: 'busy'
    },
  }))
  .add('error', () => ({
    component: StatefulButtonComponent,
    props: {
      state: 'error'
    },
  }))
  .add('success', () => ({
    component: StatefulButtonComponent,
    props: {
      state: 'success'
    },
  }));

