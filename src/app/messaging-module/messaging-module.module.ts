import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InboxComponent } from './inbox/inbox.component';
import { WritingMessageComponent } from './writing-message/writing-message.component';
import { NotificationComponent } from './notification/notification.component';
import { MessagingServiceComponent } from './messaging-service/messaging-service.component';
import { MessageTypeComponent } from './message-type/message-type.component';



@NgModule({
  declarations: [
    InboxComponent,
    WritingMessageComponent,
    NotificationComponent,
    MessagingServiceComponent,
    MessageTypeComponent
  ],
  imports: [
    CommonModule
  ]
})
export class MessagingModuleModule { }
