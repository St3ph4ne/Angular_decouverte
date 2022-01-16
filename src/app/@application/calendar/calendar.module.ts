import { NbButton, NbButtonGroupModule, NbButtonModule, NbCardModule } from '@nebular/theme';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { AgendaComponent } from './agenda/agenda.component';
import { SchedulerComponent } from './scheduler/scheduler.component';


@NgModule({
  declarations: [
    AgendaComponent,
    SchedulerComponent
  ],
  imports: [
    CommonModule,
    Ng2SmartTableModule,
    NbCardModule,
    NbButtonModule,
  ],
  exports: [
    AgendaComponent,
    SchedulerComponent
  ]
})
export class CalendarModule { }
