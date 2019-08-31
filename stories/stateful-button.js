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
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {InterceptorService} from "./mocks/interceptor.service";

const states = {
  Idle: StatefulButtonState.idle,
  Busy: StatefulButtonState.busy,
  Success: StatefulButtonState.success,
  Error: StatefulButtonState.error
};

storiesOf('Stateful Button', module)
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
        MatProgressSpinnerModule,
        HttpClientModule,
      ],
      providers: [
        {
          provide: HTTP_INTERCEPTORS,
          useClass: InterceptorService,
          multi: true
        }
      ]
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

