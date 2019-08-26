import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss'],
})
export class RegistrationComponent implements OnInit {
  state = 'idle';

  constructor(private httpClient: HttpClient) {
    this.httpClient.get('www.google.de').subscribe(console.log);
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
