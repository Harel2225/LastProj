import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';
import { IUser } from 'src/models/user.model';
import { filter, map } from 'rxjs/operators';
import { UserService } from '../user.sevice';
export interface INav {
  path: string;
  label: string;
}
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  navs: INav[] = [
    { path: '../birdList', label: 'כל הציפורים' },
    { path: '../spotList', label: 'התצפיות שלי' },


  ];
  title = {
    title: 'ברוכים הבאים'
  };
  navbarOpen = false;
  public get userIn$(): Observable<IUser> {
    return this.service.userIn$;
  }
  // public get username$(): Observable<string> {
  //   return this.service.userIn$
  //     .pipe(
  //       filter(u => !!u),
  //       map(u => u.first_name)
  //     );
  // }
  constructor(private service: UserService) { }

  ngOnInit() {
  }


  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }

}


