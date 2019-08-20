import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  state = 'idle';

  constructor() {
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
