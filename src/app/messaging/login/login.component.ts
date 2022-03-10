import { Component, OnInit } from '@angular/core';
import { DataMessagesService } from '../services/data-messages.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private service: DataMessagesService) { }

  ngOnInit(): void {

  }

  statut: string = "";

  //récupère
  loginForm(Identity) {
    this.service.auth(Identity)
    .subscribe(dataUser => {
      console.log(dataUser);
      if(dataUser == "email ou mot de passe incorrect") {
        this.statut = dataUser;
      } else {
        this.statut = "Bienvenue";
        localStorage.setItem("authorization" , dataUser);
      }

     })
  }
}
