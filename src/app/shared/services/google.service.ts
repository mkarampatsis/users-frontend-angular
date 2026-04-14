import { inject, Injectable, signal } from '@angular/core';
import { GoogleClientId } from '../../shared/config';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { jwtDecode } from 'jwt-decode';
import { IGoogleUser } from '../interfaces/google-user';
import { environment } from 'src/environments/environment';

const API_AUTH_URL = `${environment.apiURL}/api/auth/google-auth`;

declare const google: any;

@Injectable({
  providedIn: 'root'
})
export class GoogleService {
  http: HttpClient = inject(HttpClient);
  router = inject(Router);

  googleUser = signal<IGoogleUser | null>(null);

  constructor() {
    const access_token = localStorage.getItem("google-access_token");
    if (access_token) {
      
      const decodedTokenSubject = jwtDecode(access_token) as unknown as IGoogleUser;
      this.googleUser.set({
        userId: decodedTokenSubject.userId,
        email: decodedTokenSubject.email,
        name: decodedTokenSubject.name,
        photoUrl: decodedTokenSubject.photoUrl,
        roles: decodedTokenSubject.roles
      });
    }
  }

   loginGoogle(token: string) {
    return this.http.post<{token:string}>(`${API_AUTH_URL}`,{token});
  }

  logout() {
    google.accounts.id.disableAutoSelect();
    this.googleUser.set(null);
    localStorage.removeItem('google-access_token');
    this.router.navigate(['/google-login-example']);
  }
  
  initializeGoogleSignIn() {
    google.accounts.id.initialize({
      client_id: GoogleClientId,
      callback: (response: any) => this.handleCredential(response)
    });
    
    google.accounts.id.prompt(); // Display the One Tap prompt automatically on page load
    
    return google;
  }

  handleCredential(response: any) {
    const idToken = response.credential;

    // send to backend
    // response.credential is the JWT token
    console.log('Encoded JWT ID token: ' + response.credential);
    this.loginGoogle(idToken)
      .subscribe({
        next: (res) => {
          // console.log('Backend login success', res)
          const decodedToken = jwtDecode(res.token) as IGoogleUser;
          this.googleUser.set(decodedToken);
          localStorage.setItem('google-access_token', res.token);
          // console.log('Decoded token:', decodedToken);
          this.router.navigate(['/welcome']);
        },
        error: (err) => console.error('Backend login error', err),
      })
  }

  isTokenExpired(): boolean {
    const token = localStorage.getItem("google-accessToken");
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

  signOut() {
    google.accounts.id.disableAutoSelect();

    // this.http.post(`${APIPREFIX}/logout`, this.userInfo()).pipe(take(1)).subscribe();
    // Sto backend gia logout
    // Log(user_id=data["user_id"], action="logout", data={"email": data["email"]}).save()
  }
}
