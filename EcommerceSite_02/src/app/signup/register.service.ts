import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private userService: HttpClient) { }

  signupUserDetails(signupData) {
    return this.userService.post('http://localhost:3019/api/register', signupData);
  }

}
