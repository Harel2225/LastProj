import { Component, OnInit } from '@angular/core';
import { IInputConfig } from 'src/input/input.model';
import { FormControl, Validators } from '@angular/forms';
import { FormService } from './form.service';
import { UserService } from '../user.sevice';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  inputs = this.fs.inputs;
  rForm = this.fs.getForm();
  btn = {
    ok: 'הרשם',
    cancel: 'ביטול'
  };
  label = {
    register: 'עוד לא רשום? הרשם כאן'
  };
  msgError: string;
  constructor(private fs: FormService) { }

  ngOnInit() {
  }

  cancel() {
    this.rForm.reset();
  }
  register() {
console.log('hey ther new dude');

  }
}
