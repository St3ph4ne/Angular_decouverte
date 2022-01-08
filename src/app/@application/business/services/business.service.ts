import { Common, CommonData } from './../data/common';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BusinessService extends Common {

  /**
   * Le subject permet de notifier les observateurs de la modification de la liste
   */
  private subject: BehaviorSubject<CommonData[]> = new BehaviorSubject([]);

  /**
   * Données brutes
   */
  private commonDatas: CommonData[] = [
    { id: 1, text: 'first data' },
    { id: 2, text: 'second data' },
    { id: 3, text: 'third data' },
  ]

  /**
   *
   * @returns l'observable sur le subject
   */
  getDatas(): Observable<CommonData[]> {
    return this.subject.asObservable();
  }

  /**
   * Après l'ajout de la donnée dans la liste on envoie les données dans le subject
   * qui aura pour effet de notifier les observateurs
   *
   * @param data la donnée à ajouter à la liste
   */
  addData(data: CommonData): void {
    this.commonDatas.push(data);
    this.subject.next(this.commonDatas);
  }

  /**
   * Lors de l'init on charge les données dans le subject
   */
  constructor() {
    super();
    this.subject.next(this.commonDatas);
  }
}
