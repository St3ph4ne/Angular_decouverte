import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OverviewMessageComponent } from './overview-message/overview-message.component';
import { InboxComponent } from './inbox/inbox.component';
import { NotificationComponent } from './notification/notification.component';
import { NewMsgComponent } from './new-msg/new-msg.component';
import { FormsModule } from '@angular/forms';
import { UpdateMessageComponent } from './update-message/update-message.component';
import { DetailMessageComponent } from './detail-message/detail-message.component';
import { LoginComponent } from './login/login.component';



@NgModule({
  declarations: [
    OverviewMessageComponent,
    InboxComponent,
    NotificationComponent,
    NewMsgComponent,
    UpdateMessageComponent,
    DetailMessageComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    OverviewMessageComponent,
    InboxComponent,
    NotificationComponent,
    NewMsgComponent
  ]
})
export class MessagingModule { }
