import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MatButtonModule, MatFormFieldModule, MatIconModule, MatInputModule, MatProgressSpinnerModule} from '@angular/material';
import {AppComponent} from './app.component';
import {StatefulButtonComponent} from './stateful-button/stateful-button.component';
import {LoginFormComponent} from './login-form/login-form.component';

@NgModule({
  declarations: [
    AppComponent,
    StatefulButtonComponent,
    LoginFormComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    FlexLayoutModule,
    MatButtonModule,
    MatProgressSpinnerModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
}
