import { CommonData } from './../data/common';
import { BusinessService } from './../services/business.service';
import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-business-widget',
  templateUrl: './business-widget.component.html',
  styleUrls: ['./business-widget.component.scss']
})
export class BusinessWidgetComponent implements OnInit {


  /**
   * Ici j'utilise la même propriété pour afficher les données dans la liste
   * avec le décorateur input on peut y injecter les données a partir de la page qui charge ce component
   *
   */
  @Input() datas: CommonData[];


  constructor(
    private service: BusinessService
  ) { }

  /**
   * on teste pour savoir si le component a reçu les données a partir de la page
   * si le component n'est pas chargé de la sorte on recup les datas via le service.
   * On modifi un peu les données pour montrer les deux passages
   */
  ngOnInit(): void {
    if (this.datas === undefined) {
      this.service.getDatas()
        .pipe(
          map((datas) => {
            return datas.map(d => {
              return {
                id: d.id,
                text: d.text.concat(' - inside component')
              };
            });
          }))
        .subscribe(d => this.datas = d);
    }

  }



}
