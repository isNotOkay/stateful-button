import {Component, OnInit} from '@angular/core';
import {HttpClient, HttpResponse} from '@angular/common/http';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss'],
})
export class RegistrationComponent implements OnInit {
  state = 'idle';

  constructor(private httpClient: HttpClient) {
    this.httpClient.get('www.google.de').subscribe((httpResponse: HttpResponse<any>)=>{
      console.log('=== retrieved fake response ===');
      console.log(httpResponse);
      console.log(httpResponse.status);
    });
  }

  ngOnInit() {
  }

  onClick() {
    this.state = 'busy';
    setTimeout(() => {
      this.state = 'success';
    }, 1000);
  }
}
