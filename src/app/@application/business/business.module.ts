import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BusinessWidgetComponent } from './business-widget/business-widget.component';
import { BusinessNotifComponent } from './business-notif/business-notif.component';
import { NbListModule, NbCardModule } from '@nebular/theme';



@NgModule({
  declarations: [
    BusinessNotifComponent,
    BusinessWidgetComponent
  ],
  imports: [
    CommonModule,
    NbListModule,
    NbCardModule
  ],
  exports:[
    BusinessNotifComponent,
    BusinessWidgetComponent
  ]
})
export class BusinessModule { }
