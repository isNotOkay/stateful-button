import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FlexLayoutModule} from '@angular/flex-layout';
import {
  MAT_LABEL_GLOBAL_OPTIONS, MatBadgeModule,
  MatButtonModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule, MatPaginatorModule, MatProgressBarModule,
  MatProgressSpinnerModule, MatTableModule,
} from '@angular/material';
import {AppComponent} from './app.component';
import {StatefulButtonComponent} from './stateful-button/stateful-button.component';
import {EditFormComponent} from './edit-form/edit-form.component';
import {ReactiveFormsModule} from '@angular/forms';
import {CreateFormComponent} from './create-form/create-form.component';
import {TableComponent} from './table/table.component';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';

@NgModule({
  declarations: [
    AppComponent,
    StatefulButtonComponent,
    EditFormComponent,
    CreateFormComponent,
    TableComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    FlexLayoutModule,
    MatButtonModule,
    MatBadgeModule,
    MatProgressSpinnerModule,
    ReactiveFormsModule,
    MatTableModule,
    MatPaginatorModule,
    MatProgressBarModule,
    PerfectScrollbarModule
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
}
