import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-stateful-button',
  templateUrl: './stateful-button.component.html',
  styleUrls: ['./stateful-button.component.scss'],
})
export class StatefulButtonComponent implements OnInit {
  @Input() state: string;


  constructor() {
  }

  ngOnInit() {
  }

  load() {
/*    this.state = 'busy';
    setTimeout(() => {
      //this.state = 'success';
      this.state = 'error';
      setTimeout(() => {
        this.state = 'idle';
      }, 1000);
    }, 500);*/
  }
}
