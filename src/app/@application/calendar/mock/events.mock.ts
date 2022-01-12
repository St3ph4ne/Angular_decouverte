import { Observable, of } from "rxjs";
import { Action, Events, Trainer } from "../data/events";
import { Injectable } from "@angular/core";
const trainers: Trainer[] = [
  {
    id: 1,
    firstname: 'Loic',
  },
  {
    id: 2,
    firstname: 'Pierre',
  }
];

const actions: Action[] = [
  {
    id: 1,
    title: "ERN DWWM",
    hours: 1000,
    trainer: trainers[1],
    start: new Date(2022, 1, 21),
    modules: [
      {
        id: 1,
        title: 'HTML',
        hours: 70,
        events: []
      },
      {
        id: 2,
        title: 'CSS',
        hours: 35,
        events: []
      },
      {
        id: 3,
        title: 'JS',
        hours: 21,
        events: []
      }
    ]
  },
  {
    id: 2,
    title: "REGION DWWM",
    hours: 1000,
    trainer: trainers[0],
    start: new Date(2022, 4, 9),
    modules: [
      {
        id: 1,
        title: 'HTML',
        hours: 70,
        events: []
      },
      {
        id: 2,
        title: 'CSS',
        hours: 35,
        events: []
      },
      {
        id: 3,
        title: 'JS',
        hours: 21,
        events: []
      }
    ]
  }
];

// un jour en millisecondes
const DAY = 3600 * 24 * 1000;

@Injectable({
  providedIn: "root"
})
export class EventsMock extends Events {

  constructor() {
    super();

    // permet de visualiser les evenements générés
    this.generateEvents();
    this.getActions()
      .subscribe(actions => {
        actions.forEach(action => {
          action.modules.forEach(module => {
            console.log({
              action: action.title,
              module: module.title,
              events: module.events
            })
          })
        })


      })
  }


  public getActions(): Observable<Action[]> {
    return of(actions);
  }

  /**
   * Génère les evenement du planning en prenant en compte les weekend
   * Se génère par journée
   * @todo Prendre en compte les jours de congés
   * @todo Prendre en compte les jours chomés [*]
   * @todo Generer par demi journées
   */
  private generateEvents():void {
    actions.forEach(action => {
      // timestamp pour le jour de l'evenement suivant
      let nextDay = action.start.getDate();
      action.modules.forEach(module => {
        // un event par jour !
        let count = module.hours / 7;
        for (let i = 0; i < count; i++) {
          let date = new Date(action.start.getTime());

          date.setDate(nextDay);

          module.events.push({
            trainer: action.trainer,
            hours: 3.5,
            datetime: date,
            morning: false
          });
          //
          nextDay += (date.getDay() === 5) ? this.countExcludeDays(date) + 3 : this.countExcludeDays(date) + 1;
        }
      })
    })
  }


  /**
   * Utilise les jours chômés pour sortir le nombre de jour a sauter pour le prochain event
   * @todo faire une copie de la liste des periodes chomées
   *       et supprimer les jours deja pris en compte afin d'optimiser le code
   * @param day jour a partir duquel compter
   * @returns le nombre de jours a sauter
   */
  private countExcludeDays(day: Date): number{
    const excludes = [
      new Date(2022,2,3),new Date(2022,2,4),
      new Date(2022,2,7) ,new Date(2022,2,8) ,new Date(2022,2,9) ,new Date(2022,2,10) ,new Date(2022,2,11),
      new Date(2022,2,14) ,new Date(2022,2,17),];
    let next = new Date(day.getTime());
    next.setDate(next.getDate()+1);

    let fridays = 0;
    return excludes.filter(e => {
      if(next.getTime() === e.getTime()){
        if(next.getDay() === 5) {
          next.setDate(next.getDate() + 3);
          fridays ++;
        }else{
          next.setDate(next.getDate()+1);
        }
        return true;
      }
      return false;
    }).length + fridays * 2;
  }
}
