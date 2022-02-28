import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OverviewMessageComponent } from './overview-message/overview-message.component';
import { InboxComponent } from './inbox/inbox.component';
import { NotificationComponent } from './notification/notification.component';
import { PageInboxComponent } from './page-inbox/page-inbox.component';
import { PageNotifComponent } from './page-notif/page-notif.component';
import { NewMsgComponent } from './new-msg/new-msg.component';



@NgModule({
  declarations: [
    OverviewMessageComponent,
    InboxComponent,
    NotificationComponent,
    PageInboxComponent,
    PageNotifComponent,
    NewMsgComponent
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
