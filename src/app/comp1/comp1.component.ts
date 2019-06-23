import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.css']
})
export class Comp1Component implements OnInit {
  ServerID: number;
  ServerStatus: string;
  allowNewServer = false;
  constructor() {
    this.ServerID = 10;
    this.ServerStatus = 'Offline';
  }

  ngOnInit() {
  }

}
