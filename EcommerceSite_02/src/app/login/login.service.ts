import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  signupLoginDetails(loginData) {
    return this.http.post('http://localhost:3019/api/login', loginData);
  }

}
