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
  public hide = true;

  constructor(private httpClient: HttpClient) {
  }

  ngOnInit() {
  }

  login() {
    this.state = StatefulButtonState.busy;
    this.httpClient.post('login', {
      username: 'kayosh',
      password: 'secret',
    }, {observe: 'response'}).subscribe((httpResponse: HttpResponse<any>) => {
      this.state = StatefulButtonState.success;
      console.log('=== retrieved fake login response ===');
      console.log(httpResponse);
      console.log(httpResponse.status);
    });

  }
}
