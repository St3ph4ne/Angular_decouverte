import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataMessagesService } from '../services/data-messages.service';

@Component({
  selector: 'app-detail-message',
  templateUrl: './detail-message.component.html',
  styleUrls: ['./detail-message.component.scss']
})

export class DetailMessageComponent implements OnInit {

  message : any;

  constructor( private route: ActivatedRoute , private myservice: DataMessagesService ) { };

  ngOnInit(): void {

    const ID = this.route.snapshot.paramMap.get('id');

    this.myservice.getMessages().subscribe(Messages => {
      this.message = Messages.find(msg => msg.id == ID);
      console.log(this.message);
    })
  }
}
