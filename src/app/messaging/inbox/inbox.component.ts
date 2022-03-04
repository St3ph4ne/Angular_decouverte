import { ThrowStmt } from '@angular/compiler';
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

  // On initialise la variable messages comme un tableau d'objet de type Message :
  messages: Message[] = [];
  apiMessages: any;

  // on injecte DataMessagesService par défaut dans les InboxComponent :
  constructor(private myService: DataMessagesService) {

  }

  ngOnInit(): void {

    this.myService
      .getMessages()
      .subscribe((datas)=>{
        this.apiMessages = datas;
      });

      console.log(this.apiMessages)
  }

  // Pour supprimer un message :
  deleteMsg(m: Message){
    this.messages.splice(this.messages.indexOf(m),1);  }

}
