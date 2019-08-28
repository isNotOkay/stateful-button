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
import {MyHttpClientService} from "./mocks/my-http-cllient.service";
import {InterceptorService} from "./mocks/interceptor.service";
import {LoginFormComponent} from "../src/app/login-form/login-form.component";

storiesOf('Login Form', module)
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
        HttpClientModule
      ],
      providers: [
        MyHttpClientService,
        /*  {provide: HttpClient, useClass: MyHttpClientService},*/
        {
          provide: HTTP_INTERCEPTORS,
          useClass: InterceptorService,
          multi: true
        }
      ]
    }))
  .add('Login Form', () => ({
    component: LoginFormComponent,
  }));

