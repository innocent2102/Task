import { Component, OnInit } from '@angular/core';

import {MatDialog} from '@angular/material';
import {AbstractControl, FormControl, FormGroup, ValidatorFn} from '@angular/forms';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  login() {
  }

  onSubmit(loginForm: NgForm) {
    console.log(loginForm);
  }

  loginCredentialsValidator(arg = 'cos', arg2 = 'test'): ValidatorFn {
    return (control: AbstractControl): {[key: string]: any} | null => {
      const forbidden = true;
      return forbidden ? {'forbiddenName': {value: control.value}} : null;
    };
  }



}
