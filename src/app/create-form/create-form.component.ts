import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {StatefulButtonComponent} from '../stateful-button/stateful-button.component';
import {FormControl, FormGroup} from '@angular/forms';
import {HttpClient, HttpResponse} from '@angular/common/http';
import {StatefulButtonState} from '../stateful-button/statefulButtonState';
import {animate, sequence, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-create-form',
  templateUrl: './create-form.component.html',
  styleUrls: ['./create-form.component.scss'],
  animations: [
    trigger('scale', [
      state('scale', style({})),
      transition('true <=> false', [
        sequence([
          animate('0.3s ease', style({
            transform: 'scale(1.3)'
          })),
          animate('0.3s ease', style({
            transform: 'scale(1.0)'
          }))
        ])
      ])
    ])
  ]
})
export class CreateFormComponent implements OnInit {
  @ViewChild(StatefulButtonComponent, {static: false})
  public statefulButton: StatefulButtonComponent;
  @ViewChild('firstname', {static: false})
  public firstnameInputElement: ElementRef<HTMLInputElement>;
  public form: FormGroup;
  public userCount: string;
  public loading: boolean;
  public scale = false;

  constructor(private httpClient: HttpClient) {
    this.form = new FormGroup({
      firstname: new FormControl(''),
      lastname: new FormControl(''),
      email: new FormControl(''),
      telephone: new FormControl('')
    });
  }

  public save(): void {
    this.statefulButton.busy();

    this.form.markAllAsTouched();

    this.loading = true;
    this.httpClient.post('http://localhost:3000/users', {
      id: Math.round(Math.random() * 10000),
      firstname: this.form.get('firstname').value,
      lastname: this.form.get('lastname').value,
      email: this.form.get('email').value,
      telephone: this.form.get('telephone').value
    }, {observe: 'response'}).subscribe(
      (httpResponse: HttpResponse<any>) => {
        this.statefulButton.success();
        this.loadUsers(true);

      }, (err: any) => {
        // @TODO: adjust this for all input types
        this.statefulButton.error();
        this.form.get('firstname').setErrors({
          serverError: err.error.firstname
        });
        this.firstnameInputElement.nativeElement.focus();
      });
  }

  private loadUsers(toggleScale: boolean = false) {
    this.httpClient.get('http://localhost:3000/users', {observe: 'response'})
      .subscribe((res: HttpResponse<any>) => {
        this.userCount = res.body.length.toString();
        if (toggleScale) {
          this.toggleScale();
        }
      });
  }

  onStateChange(state: StatefulButtonState) {
    if (state === StatefulButtonState.idle) {
      if (this.form.valid) {
        this.form.reset();
        // @TODO: focus first element instead of firstName input element
        this.firstnameInputElement.nativeElement.focus();
      }
      this.loading = false;
    }
  }

  onKeyUpEnter() {
    if (!this.loading) {
      this.save();
    }
  }

  private toggleScale() {
    this.scale = !this.scale;
  }

  ngOnInit(): void {
    this.loadUsers();
  }
}
