import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { LoginService } from './login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginform: FormGroup;
  Response;

  constructor(private fb: FormBuilder, private ls: LoginService, private router: Router) { }

  ngOnInit() {
    this.loginform = this.fb.group({
      emailId: new FormControl('', [
        Validators.required,
        Validators.pattern(/[a-zA-Z0-9.-_]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,}/)
      ]),
      password: new FormControl('', [
        Validators.required,
        Validators.pattern(/^(?=.*[\d])(?=.*[A-Z])(?=.*[!@#$%^&*])[\w!@#$%^&*]{5,10}$/)
      ])
    })
  }

  get emailID() {
    return this.loginform.get('emailId');
  }
  get password() {
    return this.loginform.get('password');
  }
  signInLogin(loginform) {
    this.ls.signupLoginDetails(loginform.value).subscribe((response) => {
      this.Response = response;

      if (this.Response.status) {
        this.loginform.reset();
        alert("Congratulations..,Login was successfull. Click on OK to explore our Site Products");
        localStorage.setItem('token', this.Response.token);
        this.router.navigate(['ViewProducts']);
      }
      else {
        if (this.Response.message == "User not registered") {
          this.loginform.reset();
          alert(this.Response.message + ".., Click on OK to register your details");
          this.router.navigate(['SignUp']);
        }
        if (this.Response.message == "Incorrect password") {
          this.password.reset();
          alert(this.Response.message + ".., Please check and provide correct details");
        }
      }
    })
  }
}
