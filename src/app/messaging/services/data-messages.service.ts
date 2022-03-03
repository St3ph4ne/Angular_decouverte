import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { Message } from '../inbox/inbox.component';

@Injectable({
  providedIn: 'root'
})
export class DataMessagesService {

  //
  private messages: Message[] = [
    {
      title : "Message 1",
      content : 'A nebula is an interstellar cloud of dust, hydrogen, helium and other ionized gases. Originally, nebula was a name for any diffuse astronomical object, including galaxies beyond the Milky Way. A nebula is an interstellar cloud of dust, hydrogen, helium and other ionized gases. Originally, nebula was a name for any diffuse astronomical object, including galaxies beyond the Milky Way. A nebula is an interstellar cloud of dust, hydrogen, helium and other ionized gases. Originally, nebula was a name for any diffuse astronomical object, including galaxies beyond the Milky Way.',
      sent: new Date,
      isRead: false,
    },
    {
      title : "Message 2",
      content : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Cursus in hac habitasse platea dictumst quisque sagittis purus.',
      sent: new Date,
      isRead: false,
    },
    {
      title : "Message 3",
      content : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. In metus vulputate eu scelerisque felis. Leo integer malesuada nunc vel risus commodo. Posuere urna nec tincidunt praesent semper feugiat nibh. In aliquam sem fringilla ut morbi tincidunt. Tempus egestas sed sed risus pretium. Diam phasellus vestibulum lorem sed risus ultricies tristique. Tellus cras adipiscing enim eu turpis egestas pretium aenean pharetra. Amet mauris commodo quis imperdiet massa tincidunt nunc pulvinar sapien. Sociis natoque penatibus et magnis dis parturient montes nascetur. Odio pellentesque diam volutpat commodo sed egestas egestas. Id neque aliquam vestibulum morbi. Ultrices vitae auctor eu augue ut lectus arcu bibendum. Duis ut diam quam nulla porttitor. Ipsum faucibus vitae aliquet nec ullamcorper sit amet risus nullam. Elit eget gravida cum sociis natoque.',
      sent: new Date,
      isRead: false,
    },

  ]

  //
  private subject = new BehaviorSubject<Message[]>([]);

  constructor() {
    // L'appel à next met à jour les messages
    this.subject.next([])
  }

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

    const msgs = this.subject.getValue();
    msgs.push(m);
    this.subject.next(msgs);
  }

  /**
   * Mets les messages dans une observable
   * @returns
   */
  getObservableMessages(): Observable<Message[]> {
    return of(this.messages);
  }

  getSubjectMessages(): Observable<Message[]>{
    return this.subject.asObservable();
  };

  getUnreadMessagesAsObservable(): Observable<Message[]> {
    return this.subject
     .pipe(
       map(msgs => msgs.filter(m => !m.isRead))
     );
  }


  /**
   * Modifier un message
   * @param m
   */
  updateMessage(m: Message) {

  }
}
