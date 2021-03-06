import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router"
import { InboxComponent } from "./messaging/inbox/inbox.component";
import { NewMsgComponent } from "./messaging/new-msg/new-msg.component";
import { NotificationComponent } from "./messaging/notification/notification.component";
import { UpdateMessageComponent } from "./messaging/update-message/update-message.component";




@NgModule({
  imports:[
    RouterModule.forRoot([
      {path: 'notif', component : NotificationComponent},
      {path: 'inbox', component : InboxComponent},
      {path: 'newmsg', component : NewMsgComponent},
      {path: 'updatemsg/{{id}}', component : UpdateMessageComponent},
    ])
  ],
  exports:[
    RouterModule
  ]
})
export class RoutingModule{

}
