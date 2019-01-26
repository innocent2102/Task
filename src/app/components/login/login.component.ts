import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {LoginService} from '../../services/login.service';
import {ActivatedRoute, Router} from '@angular/router';
import {ResponseType} from '../../enums/response-type.enum';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  submitted = false;
  loading = false;
  responseType: any;
  response: ResponseType;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private loginService: LoginService) {
  }

  ngOnInit() {
    this.responseType = ResponseType;
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });

  }

  get formControls() {
    return this.loginForm.controls;
  }

  onSubmit() {
    this.submitted = true;

    // Prevent from  unnecessary request
    if (this.loginForm.invalid) {
      return;
    }

    this.loading = true;
    this.loginService.login(this.formControls.username.value, this.formControls.password.value)
      .subscribe(data => {
        this.loading = false;
        this.submitted = true;
        this.response = data;
        if (this.response === this.responseType.CREDENTIALS_VALID) {
          this.router.navigateByUrl('/dashboard');
        }
      });
  }


}
