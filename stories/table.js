import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
  MatButtonModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule, MatPaginatorModule,
  MatProgressSpinnerModule,
  MatTableModule
} from '@angular/material';
import {FlexLayoutModule} from '@angular/flex-layout';
import {moduleMetadata, storiesOf} from '@storybook/angular';
import {withKnobs} from '@storybook/addon-knobs';
import {StatefulButtonComponent} from '../src/app/stateful-button/stateful-button.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatBadgeModule} from "@angular/material/badge";
import {TableComponent} from '../src/app/table/table.component';
import {MatProgressBarModule} from "@angular/material/progress-bar";
import {PerfectScrollbarModule} from "ngx-perfect-scrollbar";
import {MatSortModule} from '@angular/material/sort';
import {MatCheckboxModule} from '@angular/material/checkbox';

storiesOf('Table', module)
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
        ReactiveFormsModule,
        MatBadgeModule,
        MatTableModule,
        MatPaginatorModule,
        MatProgressBarModule,
        PerfectScrollbarModule,
        MatSortModule,
        MatCheckboxModule
      ]
    }))
  .add('Basic', () => ({
    component: TableComponent
  }));
