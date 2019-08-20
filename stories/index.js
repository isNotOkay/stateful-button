import {storiesOf, moduleMetadata} from '@storybook/angular';
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

storiesOf('My Button', module)
  .addDecorator(
    moduleMetadata({
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
  .add('Stateful Component', () => ({
    component: StatefulButtonComponent
  }))

