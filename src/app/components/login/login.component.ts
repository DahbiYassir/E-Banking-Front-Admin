import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { AuthentificationService } from '../../services/authentification.service';
import { NavbarsService } from 'src/app/services/navbars.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  
  form :FormGroup;
  loginInvalid = false;
  hide:any;

  constructor(
    private router: Router,
    private loginservice: AuthentificationService,
    public nav: NavbarsService
  ) {}

  ngOnInit() {
    this.form = new FormGroup({
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
    });
    this.nav.hide();
  }
  get username() {
    return this.form.get('username');
  }
  get password() {
    return this.form.get('password');
  }

  Login() {
    this.loginservice
      .authentificate(this.username.value, this.password.value)
      .subscribe(
        (data) => {
          this.loginInvalid = false;
          this.router.navigate(['/agence'])
          console.log("data login : " +JSON.stringify(data));
        },
        (error) => {
          this.loginInvalid = true;
        }
      );
  }
}