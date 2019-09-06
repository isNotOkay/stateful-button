import {Component, ViewChild} from '@angular/core';
import {StatefulButtonComponent} from '../stateful-button/stateful-button.component';
import {FormControl, FormGroup} from '@angular/forms';
import {HttpClient, HttpResponse} from '@angular/common/http';

@Component({
  selector: 'app-create-form',
  templateUrl: './create-form.component.html',
  styleUrls: ['./create-form.component.scss']
})
export class CreateFormComponent {

  @ViewChild(StatefulButtonComponent, {static: false})
  public statefulButton: StatefulButtonComponent;
  public form: FormGroup;

  constructor(private httpClient: HttpClient) {
    this.form = new FormGroup({
      firstname: new FormControl(''),
      lastname: new FormControl(''),
      email: new FormControl(''),
      telephone: new FormControl(''),
    });
  }

  public save(): void {
    this.statefulButton.busy();
    this.httpClient.post('http://localhost:3000/users', {
      id: Math.round(Math.random() * 10000),
      firstname: this.form.get('firstname').value,
      lastname: this.form.get('lastname').value,
      email: this.form.get('email').value,
      telephone: this.form.get('telephone').value,
    }, {observe: 'response'}).subscribe(
      (httpResponse: HttpResponse<any>) => {
        this.statefulButton.success();
      }, () => {
        this.statefulButton.error();
      });
  }

}
