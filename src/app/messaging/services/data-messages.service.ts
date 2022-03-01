import { Injectable } from '@angular/core';
import { Message } from '../inbox/inbox.component';

@Injectable({
  providedIn: 'root'
})
export class DataMessagesService {

  //
  private messages: Message[] = [
    {
      title : 'Titre du message 1',
      content: 'contenu du message 1',
      isRead: false,
      sent: new Date()
    },
    {
      title : 'Titre du message 2',
      content: 'contenu du message 2',
      isRead: false,
      sent: new Date()
    },
    {
      title : 'Titre du message 3',
      content: 'contenu du message 3',
      isRead: false,
      sent: new Date()
    }
  ]

  constructor(
  ) { }

  /**
   *
   */
  getMessages(): Message[]{
    return this.messages;

  }

  addMessage(m: Message) {
    this.messages.push(m);
  }
}
