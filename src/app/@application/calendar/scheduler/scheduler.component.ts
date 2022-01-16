import { MONTHS } from './../agenda/agenda.component';
import { Component, OnInit } from '@angular/core';

export interface Datasources{
  items: DataSource[]
}

export interface DataSource{
  title : string,
  events : Event[]
}

export interface Event{
  day : number,
  text: string
}




const DATAS: DataSource[] = [
  {
    title : "DWWM",
    events : [
      {
        text: "HTML",
        day: 12
      },
      {
        text: "HTML",
        day : 13
      },
      {
        text: "HTML",
        day : 14
      },
      {
        text: "HTML",
        day : 19
      },
      {
        text: "HTML",
        day : 20
      },

    ]
  }
]


@Component({
  selector: 'app-scheduler',
  templateUrl: './scheduler.component.html',
  styleUrls: ['./scheduler.component.scss']
})
export class SchedulerComponent implements OnInit {
  scheduler = {
    date : new Date(),
    view : {
      month : "",
      year : 0,
      head: [],
      content: []
    }

  }

  dataSources: DataSource[] = DATAS;


  constructor() {

    this.loadView();
    const line = {
      title : this.dataSources[0].title,
      events : []
    }
    for (let i = 0; i < this.scheduler.view.head.length; i++) {
      const evt = this.dataSources[0].events.find(e => this.scheduler.view.head[i].title === e.day) ;
      if(evt === undefined)
        line.events.push({
          text : ''
        });
      else
        line.events.push(evt);
    }
    this.scheduler.view.content.push(line);
    console.log(this.scheduler.view.content);


  }

  ngOnInit(): void {
  }


  private loadView(){
    this.scheduler.view.month = MONTHS[this.scheduler.date.getMonth()];
    this.scheduler.view.year = this.scheduler.date.getFullYear();
    const date = new Date(this.scheduler.view.year,this.scheduler.date.getMonth(),1);
    this.scheduler.view.head = [];
    while(date.getMonth() === this.scheduler.date.getMonth()){
      if(!(date.getDay() === 0 || date.getDay() === 6))
        this.scheduler.view.head.push({title : date.getDate()});
      date.setDate(date.getDate() + 1);
    }
  }


  public changeMonth(direction: number){
    this.scheduler.date.setMonth(this.scheduler.date.getMonth() + direction);
    this.loadView();
  }
}
