import {Component, ElementRef, ViewChild} from '@angular/core';
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
  @ViewChild('firstname', {static: false})
  public firstnameInputElement: ElementRef<HTMLInputElement>;
  public form: FormGroup;
  public userCount: number;

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

    this.form.markAllAsTouched();

    this.httpClient.post('http://localhost:3000/users', {
      id: Math.round(Math.random() * 10000),
      firstname: this.form.get('firstname').value,
      lastname: this.form.get('lastname').value,
      email: this.form.get('email').value,
      telephone: this.form.get('telephone').value,
    }, {observe: 'response'}).subscribe(
      (httpResponse: HttpResponse<any>) => {
        this.statefulButton.success();
        //this.form.reset();

        this.httpClient.get('http://localhost:3000/users', {observe: 'response'})
          .subscribe((res: HttpResponse<any>) => {
            this.userCount = res.body.length;
          });

      }, (err: any) => {
        // @TODO: adjust this for all input types
        this.statefulButton.error();
        this.form.get('firstname').setErrors({
          serverError: err.error.firstname
        });
        this.firstnameInputElement.nativeElement.focus();
      });
  }

}
