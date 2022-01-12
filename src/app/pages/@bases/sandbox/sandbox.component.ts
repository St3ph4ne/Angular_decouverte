import { EventsMock } from './../../../@application/calendar/mock/events.mock';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sandbox',
  templateUrl: './sandbox.component.html',
  styleUrls: ['./sandbox.component.scss']
})
export class SandboxComponent implements OnInit {

  constructor(
    private service: EventsMock
  ) { }

  ngOnInit(): void {
  }

}
