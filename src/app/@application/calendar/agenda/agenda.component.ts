import { Component, OnInit } from '@angular/core';


const DAYS = ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi']
const MONTHS = ['Janvier','Février','Mars','Avril','Mai','Juin','Juillet','Août','Septembre','Octobre','Novembre','Décembre'];


@Component({
  selector: 'app-agenda',
  templateUrl: './agenda.component.html',
  styleUrls: ['./agenda.component.scss']
})
export class AgendaComponent implements OnInit {

  agendaHead = DAYS.map((day, index) => {
    return {
      id: index+1,
      title: day
    }
  })

  // liste des cellules de l'agenda
  monthCells = []

  // Objet calendrier pour l'affichage et kes calculs
  agenda = {
    today : new Date(),
    month : (new Date()).getMonth(),
    view : {
      date : (new Date()).getDate(),
      day : (new Date()).getDay(),
      month : MONTHS.find((m,i) => i === (new Date()).getMonth()),
      year : (new Date()).getFullYear()
    }
  }

  constructor() {
    this.generate(new Date(this.agenda.view.year,this.agenda.today.getMonth(),1));
  }

  ngOnInit(): void {

  }

  /**
   * génère le calendrier pour le mois en cours
   * Le calendrier est figé sur les jours d'une semaine travaillée (hors weekends)
   * @param date
   */
  private generate(date: Date){
    let line = [];
    // préparation de la génération hors weekend
    if(date.getDay() === 0) date.setDate(date.getDate()+ 1)
    if(date.getDay() === 6) date.setDate(date.getDate()+ 2)
    // cases du mois precedent
    line = [...this.getDaysPreviousMonth(date)];

    while(date.getMonth() === this.agenda.month){

      const cell = {
        title : date.getDate(),
        content : "event",
        today: (
          this.agenda.today.getDate() === date.getDate() &&
          this.agenda.today.getMonth() === date.getMonth() &&
          this.agenda.today.getFullYear() === date.getFullYear())
      }
      line.push(cell);
      date.setDate(date.getDate() + 1);
      // prochaine generation le lundi d'après
      if(date.getDay() === 6){
        date.setDate(date.getDate() + 2);
        this.monthCells.push(line);
        line = [];
      }
    }

    // On comble la dernière ligne avec les jours du mois d'après
    if(line.length > 0){
      line.push(...this.getDaysNextMonth(5 - line.length))
      this.monthCells.push(line);
    }

  }

  /**
   * Retourne des events vide pour les jours precedent le mois en cours
   * @param date
   * @returns
   */
  private getDaysPreviousMonth(date: Date): any[]{
    let line = [];
    for (let i = 1; i < date.getDay(); i++) {
      line.push({
        title : ""
      })
    }
    return line;
  }

  /**
   * genère une liste d'events pour le mois d'après
   * @param count
   * @returns
   */
  private getDaysNextMonth(count: number){
    let line = [];
    while(count > 0){
      line.push({
        title: ""
      });
      count --;
    }
    return line;
  }

  /**
   * Changement de mois sur click de bouton
   * @param direction
   */
  public changeMonth(direction: number){
    this.monthCells = [];
    let next = new Date(this.agenda.view.year,this.agenda.month + direction,1);
    this.agenda.month = next.getMonth();
    this.agenda.view.month = MONTHS.find((m,i) => i === next.getMonth());
    this.agenda.view.year = next.getFullYear();
    this.generate(next);
  }

}
