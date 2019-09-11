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
        MatPaginatorModule
      ]
    }))
  .add('Basic', () => ({
    component: TableComponent
  }));
