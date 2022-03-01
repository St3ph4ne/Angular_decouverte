import { Component, OnInit } from '@angular/core';
import { Message } from '../inbox/inbox.component';
import { DataMessagesService } from '../services/data-messages.service';

@Component({
  selector: 'app-new-msg',
  templateUrl: './new-msg.component.html',
  styleUrls: ['./new-msg.component.scss']
})
export class NewMsgComponent implements OnInit {

  m: Message;

  constructor(private service: DataMessagesService) {

  }

  ngOnInit(): void {
    this.m = {
      content : 'bonjour',
      title : 'mon super titre',
      sent : new Date(),
      isRead : false
    }
  }

  createMessage() {
    this.service.addMessage(this.m)
  }

}
