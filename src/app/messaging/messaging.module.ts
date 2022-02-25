import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OverviewMessageComponent } from './overview-message/overview-message.component';
import { InboxComponent } from './inbox/inbox.component';



@NgModule({
  declarations: [
    OverviewMessageComponent,
    InboxComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    OverviewMessageComponent,
    InboxComponent
  ]
})
export class MessagingModule { }
