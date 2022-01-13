import { map } from 'rxjs/operators';
import { EventsMock } from './../../../@application/calendar/mock/events.mock';
import { Component, OnInit } from '@angular/core';

const MODULES_COLOR = [
  {name : 'HTML',color : 'rgb(241 169 160 / 70%)'},
  {name : 'CSS',color : 'rgb(200 247 197 / 70%)'},
  {name : 'JS',color : 'rgb(137 196 244 / 70%)'},
  {name : 'PHP',color : 'rgb(241 214 147 / 70%)'},
];

@Component({
  selector: 'app-sandbox',
  templateUrl: './sandbox.component.html',
  styleUrls: ['./sandbox.component.scss']
})
export class SandboxComponent implements OnInit {

  dataSource: any[] = [];
  constructor(
    private service: EventsMock
  ) {
    service.getActions()
    .pipe(map(actions => {
      let events = [];
      actions[0].modules.forEach(m => {
        m.events.forEach(e => {
          e['module'] = m.title;
          e['action'] = actions[0].title;
          e['color'] = MODULES_COLOR.find(c => c.name === m.title).color
          events.push(e);
        });
      });
      return events;
    }))
    .subscribe(actions => this.dataSource = actions)
  }

  ngOnInit(): void {
  }

}
