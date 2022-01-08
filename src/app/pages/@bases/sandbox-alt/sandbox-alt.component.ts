import { CommonData } from './../../../@application/business/data/common';
import { BusinessService } from './../../../@application/business/services/business.service';
import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-sandbox-alt',
  templateUrl: './sandbox-alt.component.html',
  styleUrls: ['./sandbox-alt.component.scss']
})
export class SandboxAltComponent implements OnInit {

  /**
   * Liste envoyée dans le business-widget
   */
  businessDatas: CommonData[];

  constructor(
    private businessService: BusinessService
  ) { }

  /**
   * Les données sont recupérées dans ce component et sont envoyées
   * au business-widget via businessDatas
   */
  ngOnInit(): void {
    this.businessService.getDatas()
      .pipe(
        map(datas => {
          return datas.map(d => {
            return {
              id: d.id,
              text: d.text.concat(' from sandbox-alt page')
            }
          })
        })
      )
      .subscribe(datas => this.businessDatas = datas);
  }

}
