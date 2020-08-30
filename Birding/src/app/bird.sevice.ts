import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, ReplaySubject } from 'rxjs';
import { IUser } from 'src/models/user.model';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { IBird } from 'src/models/bird.model';

const BASE_URL = 'http://localhost:54867/api/';

@Injectable({
  providedIn: 'root'
})
export class BirdService {

  constructor(private http: HttpClient, private router: Router) { }

  login(user: any): Observable<any> {
    const url = BASE_URL + 'bird';
    return this.http.post(url, user);
  }

  public getAllUsers() {
    const url = 'http://localhost:54867/api/bird';
    return this.http.get<IBird[]>(url);
  }
}
