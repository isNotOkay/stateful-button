import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-stateful-button',
  templateUrl: './stateful-button.component.html',
  styleUrls: ['./stateful-button.component.scss'],
})
export class StatefulButtonComponent implements OnInit {
  state = 'idle';


  constructor() {
  }

  ngOnInit() {
  }

  load() {
    this.state = 'busy';
    setTimeout(() => {
      this.state = 'success';
      setTimeout(() => {
        this.state = 'idle';
      }, 1000);
    }, 500);
  }
}
