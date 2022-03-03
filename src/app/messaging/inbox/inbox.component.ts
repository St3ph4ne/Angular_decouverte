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

  messages: Message[] = [];

  constructor(private myService: DataMessagesService) {

  }

  ngOnInit(): void {
    // this.messages = this.myService.getMessages();
    // on remplace par ce qui suit pour utiliser les observables

    // Rappel de syntaxe : () => {} déclare une foncton anonyme
    this.myService
      .getObservableMessages()
      .subscribe((datas)=>{
        this.messages = datas;
      });
      console.log(this.messages);
  }

  deleteMsg(m: Message){
    this.messages.splice(this.messages.indexOf(m),1);  }

}
