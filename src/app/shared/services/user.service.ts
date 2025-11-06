import { HttpClient } from '@angular/common/http';
import { Injectable, effect, inject, signal } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { jwtDecode } from 'jwt-decode';
import {
  Credentials,
  LoggedInUser,
  IUser,
} from 'src/app/shared/interfaces/mongo-backend';
import { Router } from '@angular/router';

const API_URL = `${environment.apiURL}/api/users`;
const API_AUTH_URL = `${environment.apiURL}/api/auth`;

@Injectable({
  providedIn: 'root'
})
export class UserService {
  http: HttpClient = inject(HttpClient);
  router = inject(Router);

  user = signal<LoggedInUser | null>(null);

  constructor() {
    const access_token = localStorage.getItem("access_token");
    if (access_token) {
      
      const decodedTokenSubject = jwtDecode(access_token) as unknown as LoggedInUser;
      this.user.set({
        username: decodedTokenSubject.username,
        email: decodedTokenSubject.email,
        roles: decodedTokenSubject.roles
      });
    }
    effect(() => {
      if (this.user()) {
        console.log('User logged in:', this.user()?.username);
      } else {
        console.log('No user logged in');
      }
    });
  }

  loginUser(credentials: Credentials) {
    return this.http.post<{ token:string, user: { id: string, username: string } }>(
      `${API_AUTH_URL}/login`,
      credentials,
    );
  }

  logoutUser() {
    this.user.set(null);
    localStorage.removeItem('access_token');
    this.router.navigate(['user-login-example']);
  }

  registerUser(user: IUser) {
    return this.http.post<{ msg: string }>(`${API_URL}`, user);
  }

  check_duplicate_email(email: string) {
    return this.http.get<{ msg: string }>(
      `${API_URL}/check_duplicate_email/${email}`,
    );
  }

  isTokenExpired(): boolean {
    const token = localStorage.getItem("access_token");
    if (!token) return true;

    try {
      const decoded: any = jwtDecode(token);
      const exp = decoded.exp;
      const now = Math.floor(Date.now() / 1000);
      return exp < now;
    } catch (e) {
      return true; // treat invalid token as expired
    }
  }
}

// Here’s what each part means:
// Date.now() returns the current time in milliseconds since the Unix epoch (Jan 1, 1970).
// JWT tokens use the exp (expiration) field in seconds, not milliseconds.
// So you divide by 1000 to convert to seconds.
// Then Math.floor(...) ensures you get a whole number (integer), since exp is an integer.