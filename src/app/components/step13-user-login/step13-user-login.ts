import { Component, inject, ChangeDetectorRef  } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Credentials, LoggedInUser } from 'src/app/shared/interfaces/mongo-backend';
import { UserService } from 'src/app/shared/services/user.service';
import { jwtDecode } from 'jwt-decode';

@Component({
  selector: 'app-step13-user-login',
  imports: [ReactiveFormsModule],
  templateUrl: './step13-user-login.html',
  styleUrl: './step13-user-login.css',
})
export class Step13UserLogin {
  userService = inject(UserService);
  router = inject(Router);
  http = inject(Router);
  route= inject(ActivatedRoute);
  cdr = inject(ChangeDetectorRef);

  invalidLogin = false;

  form = new FormGroup({
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', Validators.required),
  });

  ngOnInit() {
    this.route.queryParams
      .subscribe(params => {
        const access_token = params['token'];
        if (access_token){
          localStorage.setItem('access_token', access_token);

          const decodedTokenSubject = jwtDecode(access_token) as unknown as LoggedInUser;

          this.userService.user.set({
            username: decodedTokenSubject.username,
            email: decodedTokenSubject.email,
            roles: decodedTokenSubject.roles,
          });
          this.router.navigate(['restricted-content-example']);
        }
      })
  }

  onSubmit() {
    const credentials = this.form.value as Credentials;
    this.userService.loginUser(credentials).subscribe({
      next: (response) => {
        const access_token = response.token;
        localStorage.setItem('access_token', access_token);

        const decodedTokenSubject = jwtDecode(access_token) as unknown as LoggedInUser;

        this.userService.user.set({
          username: decodedTokenSubject.username,
          email: decodedTokenSubject.email,
          roles: decodedTokenSubject.roles,
        });
        console.log("Token", decodedTokenSubject);
        this.router.navigate(['user-create-example']);
      },
      error: (error) => {
        console.error('Login error:', error);
        this.invalidLogin = true;
        this.cdr.detectChanges();
      },
    });
  }
}
