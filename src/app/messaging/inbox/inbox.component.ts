import { Component, OnInit } from '@angular/core';
import { DataMessagesService } from '../services/data-messages.service';

export interface Message {
  title : string;
  content : string;
  sent : Date;
  isRead : boolean;
}

@Component({
  selector: 'app-inbox',
  templateUrl: './inbox.component.html',
  styleUrls: ['./inbox.component.scss']
})
export class InboxComponent implements OnInit {

  messages: Message[] = [];

  constructor(private service: DataMessagesService) {

  }

  ngOnInit(): void {
    this.messages = this.service.getMessages()
  }

  deleteMsg(){
    this.service.deleteMessage();
  }

}
