import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {AbstractControl, FormBuilder, FormControl, FormGroup, NgForm, ValidatorFn, Validators} from '@angular/forms';
import {LoginService} from '../../services/login.service';
import {ActivatedRoute} from '@angular/router';
import {first} from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  submitted = false;
  loading = false;
  username: string;
  password: string;
  returnUrl: string;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private loginService: LoginService) {
  }

  ngOnInit() {
    // this.loginForm = new FormGroup({
    //   'username': new FormControl(this.username, [
    //     Validators.required,
    //     Validators.minLength(4),
    //   ]),
    //   'password': new FormControl(this.password)},
    //   this.loginCredentialsValidator());
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });

    // reset login status
    this.loginService.logout();

    // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  get f() { return this.loginForm.controls; }

  onSubmit() {
    this.submitted = true;
    console.log(this.f.username.value, this.f.password.value)

    // stop here if form is invalid
    if (this.loginForm.invalid) {
      return;
    }

    this.loading = true;
    this.loginService.login(this.f.username.value, this.f.password.value)
      .pipe(first())
      .subscribe(
        data => {
          //this.router.navigate([this.returnUrl]);
        },
        error => {
          //this.alertService.error(error);
          this.loading = false;
        });
  }

  test() {
    console.log(this.loginForm);
  }

  // onSubmit(loginForm: NgForm) {
  //   console.log(loginForm);
  // }
  //
  // wrondCredentiasInfo(loginForm) {
  //   return loginForm.errors > 0 ? 'blad' : 'asda';
  // }
  //
  // loginCredentialsValidator(): ValidatorFn {
  //   return (control: AbstractControl): {[key: string]: any} | null => {
  //     const okej = loginForm.controls.username.value === 'test' && loginForm.controls.password.value === 'test';
  //     console.log(okej);
  //     return okej ?  null : {'forbiddenName': {value: control.value}};
  //   };
  // }



}
