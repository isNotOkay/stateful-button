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
import {withKnobs} from '@storybook/addon-knobs';
import {StatefulButtonComponent} from '../src/app/stateful-button/stateful-button.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {InterceptorService} from "./mocks/interceptor.service";
import {EditFormComponent} from "../src/app/edit-form/edit-form.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {CreateFormComponent} from "../src/app/create-form/create-form.component";

storiesOf('Edit Form', module)
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
        FormsModule,
        ReactiveFormsModule
      ],
      providers: [
       /* {
          provide: HTTP_INTERCEPTORS,
          useClass: InterceptorService,
          multi: true
        }*/
      ]
    }))
  .add('Edit Form', () => ({
    component: EditFormComponent,
  }))
  .add('Create Form', () => ({
    component: CreateFormComponent,
  }));

