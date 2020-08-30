import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, ReplaySubject } from 'rxjs';
import { IUser } from 'src/models/user.model';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';

const BASE_URL = 'http://localhost:54867/api/';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private _userIn$ = new ReplaySubject<IUser>(1);

  constructor(private http: HttpClient, private router: Router) { }
  // public get knight$(): Observable<UserService> {
  //   return this._users$.asObservable();
  // }
  public get userIn$(): Observable<IUser> {
    return this._userIn$.asObservable();
  }

  public get isConnected$(): Observable<boolean> {
    return this._userIn$.pipe(map(u => !!u));
  }
  login(user: any): Observable<any> {
    const url = BASE_URL + 'user';
    return this.http.post(url, user);
  }
  register(user: any) {
    const url = BASE_URL + 'register';
    return this.http.post(url, user);
  }
  setUser(user) {
    console.log('you got it');
    this._userIn$.next(user);
    /* כניסה למערכת */
    const url = 'home/birdList';
    this.router.navigate([url]);

  }
}
