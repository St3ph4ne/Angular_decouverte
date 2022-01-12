import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Action, Events } from '../data/events';
import { EventsMock } from '../mock/events.mock';


@Injectable({
  providedIn: 'root'
})
export class EventsService {

  constructor(
    private eventsService: EventsMock
  ){}
}
