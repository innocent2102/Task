import { Component, OnInit } from '@angular/core';

import {MatDialog} from '@angular/material';
import {FormControl, FormGroup} from '@angular/forms';
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

}
