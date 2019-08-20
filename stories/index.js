import {storiesOf, moduleMetadata} from '@storybook/angular';

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


let state = 'busy';
setTimeout(() => {
  state = 'error';
  console.log(state);
}, 3000);

const stories = storiesOf('Storybook Knobs', module);
//stories.addDecorator(withKnobs);
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
  .add('interactive', () => ({
    template: `<app-stateful-button [state]="state"></app-stateful-button>`,
    props: {
      state: state
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

