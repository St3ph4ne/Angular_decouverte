import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router"
import { InboxComponent } from "./messaging/inbox/inbox.component";
import { NewMsgComponent } from "./messaging/new-msg/new-msg.component";
import { NotificationComponent } from "./messaging/notification/notification.component";




@NgModule({
  imports:[
    RouterModule.forRoot([
      {path: 'notif', component : NotificationComponent},
      {path: 'inbox', component : InboxComponent},
      {path: 'newmsg', component : NewMsgComponent},

    ])
  ],
  exports:[
    RouterModule
  ]
})
export class RoutingModule{

}
