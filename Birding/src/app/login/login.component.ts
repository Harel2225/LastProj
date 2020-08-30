import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.sevice';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  username;
  password;
  title = {
    title: 'כניסת צפרים',
  };
  form = {
    username: 'שם משתמש:',
    password: 'סיסמא:',
    login: 'הכנס'
  };

  constructor(private userService: UserService) { }

  ngOnInit() {
  }
  onsubmit() {
    console.log('submitted');
    const { username, password } = this;
    const user = { username, password };
    console.log(user);


  }
  submit(formValue) {
    console.log('submitted');
    this.userService.login(formValue).subscribe(res => {
      if (res) {
        this.userService.setUser(res);
      } else {
        console.log('Not founf');

      }

      console.log(res);

    });

    console.log(formValue);
  }

}
