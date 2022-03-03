import { Component, OnInit } from '@angular/core';
import { DataMessagesService } from '../services/data-messages.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss']
})
export class NotificationComponent implements OnInit {

  notReadMessages: number;

  constructor(private service: DataMessagesService) {
  }

  ngOnInit(): void {
    this.service
      .getSubjectMessages()
      .pipe(
        map((msgs, idx) => {
          return msgs.filter((m) => {
            return !m.isRead;
          }).length; // retourne tous les messages non lus
        })
      )
      .subscribe( datas => this.notReadMessages = datas )
  }

}
