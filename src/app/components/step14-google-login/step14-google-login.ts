import { Component, inject } from '@angular/core';
import { GoogleService } from 'src/app/shared/services/google.service';

declare let google: any;

@Component({
  selector: 'app-step14-google-login',
  imports: [],
  templateUrl: './step14-google-login.html',
  styleUrl: './step14-google-login.css',
})
export class Step14GoogleLogin {
  googleService = inject(GoogleService)

  ngOnInit() {
    google = this.googleService.initializeGoogleSignIn();

    google.accounts.id.renderButton(
      document.getElementById("googleBtn"),
      { 
        theme: "outline", 
        size: "large", 
        shape: "rectangular", 
        logo_alignment: "center",
        width: "50%" 
      }
    );
  }
  
  logout() {
    console.log('Logout clicked');
    this.googleService.signOut();
    this.googleService.logout();
  }
}
