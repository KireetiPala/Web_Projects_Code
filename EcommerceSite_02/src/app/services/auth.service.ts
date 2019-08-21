import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router: Router) { }

  loggedIn() {
    return !!localStorage.getItem('token');
  }

  logOutUser() {
    localStorage.removeItem('token');
    this.router.navigate(['Home']);
  }
}
