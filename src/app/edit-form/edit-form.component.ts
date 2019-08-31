import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {HttpClient, HttpResponse} from '@angular/common/http';
import {User} from '../models/User';
import {StatefulButtonComponent} from '../stateful-button/stateful-button.component';

@Component({
  selector: 'app-edit-form',
  templateUrl: './edit-form.component.html',
  styleUrls: ['./edit-form.component.scss'],
})
export class EditFormComponent implements AfterViewInit {
  @ViewChild(StatefulButtonComponent, {static: false})
  public statefulButton: StatefulButtonComponent;
  public form: FormGroup;

  constructor(private httpClient: HttpClient) {
    this.form = new FormGroup({
      firstname: new FormControl(''),
      lastname: new FormControl(''),
      email: new FormControl(''),
    });
  }

  public ngAfterViewInit(): void {
    this.httpClient.get('user', {observe: 'response'}).subscribe(
      (httpResponse: HttpResponse<User>) => {
        const user = httpResponse.body;
        this.form.get('firstname').setValue(user.firstname);
        this.form.get('lastname').setValue(user.lastname);
        this.form.get('email').setValue(user.email);
      }, this.statefulButton.error);
  }

  public save(): void {
    this.statefulButton.busy();
    this.httpClient.put('user', {
      firstname: this.form.get('firstname').value,
      lastname: this.form.get('lastname').value,
      email: this.form.get('email').value,
    }, {observe: 'response'}).subscribe(
      (httpResponse: HttpResponse<any>) => {
        this.statefulButton.success();
      }, this.statefulButton.error);
  }
}
