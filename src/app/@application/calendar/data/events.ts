import { Observable } from 'rxjs';


export interface Trainer{
  id: number;
  firstname: string;
  actions?: Action[];
}

export interface Action {
  id: number;
  trainer: Trainer;
  title: string;
  hours: number;
  start: Date;
  modules: Module[];
}

export interface Module {
  id: number;
  title: string;
  hours: number;
  events: Event[];
}

export interface Event{
  datetime: Date;
  morning: boolean;
  hours: number;
  trainer: Trainer;
}


export abstract class Events{
  public abstract getActions(): Observable<Action[]>;
}
