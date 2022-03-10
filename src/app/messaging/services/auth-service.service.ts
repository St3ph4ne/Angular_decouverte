import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Class } from 'leaflet';

@Injectable({
  providedIn: 'root'
})

class User {
  email: string;
  password: string;
}

export class AuthServiceService {

  constructor(private http: HttpClient) {

  }

  login(email:string, password:string ) {
    return this.http.post<User>('/api/login', {email, password})
        // this is just the HTTP call,
        // we still need to handle the reception of the token
        // .shareReplay();
}


}

