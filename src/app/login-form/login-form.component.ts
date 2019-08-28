import {Component, OnInit} from '@angular/core';
import {HttpClient, HttpResponse} from '@angular/common/http';
import {StatefulButtonState} from '../stateful-button/statefulButtonState';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
})
export class LoginFormComponent implements OnInit {
  public state = StatefulButtonState.idle;

  constructor(private httpClient: HttpClient) {
    this.httpClient.post('login', {}, {observe: 'response'}).subscribe((httpResponse: HttpResponse<any>) => {
      console.log('=== retrieved fake login response ===');
      console.log(httpResponse);
      console.log(httpResponse.status);
    });
  }

  ngOnInit() {
  }

  onClick() {
    this.state = StatefulButtonState.busy;
    setTimeout(() => {
      this.state = StatefulButtonState.success;
    }, 1000);
  }
}
