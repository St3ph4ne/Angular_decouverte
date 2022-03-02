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
   * Récupérer tous les messages
   */
  getMessages(): Message[]{
    return this.messages;

  }

  /**
   * Ajouter un nouveau message
   * @param m
   */
  addMessage(m: Message) {
    this.messages.push(m);
  }

  /**
   * Supprimer un message
   * @param m
   */
  deleteMessage() {
    this.messages.pop();
  }

  /**
   * Modifier un message
   * @param m
   */
  updateMessage(m: Message) {

  }
}
