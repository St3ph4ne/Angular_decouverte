import { CalendarModule } from './calendar/calendar.module';
import { BusinessWidgetComponent } from './business/business-widget/business-widget.component';
import { BusinessModule } from './business/business.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    BusinessModule,
    CalendarModule
  ],
  exports: [
    BusinessModule,
    CalendarModule
  ]
})
export class ApplicationModule { }
