import { NbButton, NbButtonGroupModule, NbButtonModule, NbCardModule } from '@nebular/theme';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { AgendaComponent } from './agenda/agenda.component';


@NgModule({
  declarations: [
    AgendaComponent
  ],
  imports: [
    CommonModule,
    Ng2SmartTableModule,
    NbCardModule,
    NbButtonModule,
  ],
  exports: [
    AgendaComponent
  ]
})
export class CalendarModule { }
