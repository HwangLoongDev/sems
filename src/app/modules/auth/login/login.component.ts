import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'se-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  formLogin = this.formBuilder.group({
    username: ['admin@soeasy.vn', [Validators.required, Validators.email]],
    password: ['admin@soeasy.vn', [Validators.required]],
  });

  constructor(private router: Router, private formBuilder: FormBuilder) {}

  get usernameCtrl() {
    return this.formLogin.controls.username;
  }

  get passwordCtrl() {
    return this.formLogin.controls.password;
  }

  public submitLogin() {
    if (this.formLogin.valid) {
      this.router.navigateByUrl('/');
    } else {
      console.log(this.formLogin.controls.username.errors);
    }
  }
}
