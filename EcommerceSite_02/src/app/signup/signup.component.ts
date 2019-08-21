import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { RegisterService } from './register.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  Response;
  RegisterStatus: string;

  singUpForm: FormGroup;
  constructor(private fb: FormBuilder, private rs: RegisterService, private router: Router) { }

  ngOnInit() {
    this.singUpForm = this.fb.group({
      firstName: new FormControl('', [
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(20)
      ]),
      lastName: new FormControl('', [
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(10)
      ]),
      emailId: new FormControl('', [
        Validators.required,
        Validators.pattern(/[a-zA-Z0-9.-_]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,}/)
      ]),
      password: new FormControl('', [
        Validators.required,
        Validators.pattern(/^(?=.*[\d])(?=.*[A-Z])(?=.*[!@#$%^&*])[\w!@#$%^&*]{5,10}$/)
      ]),
      mobileNumber: new FormControl('', [
        Validators.required,
        Validators.pattern(/^[6-9]\d{9}$/)
      ]),
      checkboxtick: new FormControl(false, [
        Validators.requiredTrue,
      ])
    })
  }

  get firstName() {
    return this.singUpForm.get('firstName');
  }
  get lastName() {
    return this.singUpForm.get('lastName');
  }
  get emailId() {
    return this.singUpForm.get('emailId');
  }
  get password() {
    return this.singUpForm.get('password');
  }
  get mobileNumber() {
    return this.singUpForm.get('mobileNumber');
  }
  get checkboxtick() {
    return this.singUpForm.get('checkboxtick');
  }

  storeSignUpDate(singUpForm) {
    this.rs.signupUserDetails(singUpForm.value).subscribe((response) => {
      this.Response = response;

      if (this.Response.status) {
        this.singUpForm.reset();
        alert(this.Response.message + ".., Click on OK to navigate to Login site");
        this.router.navigate(['Login']);
      }
      else {
        this.singUpForm.reset();
        alert(this.Response.message + ".., Click on OK to navigate to Login site");
        this.router.navigate(['Login']);
      }
    })
  }
}


