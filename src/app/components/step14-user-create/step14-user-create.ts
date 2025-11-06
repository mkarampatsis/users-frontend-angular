import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
    AbstractControl,
    FormControl,
    FormGroup,
    ReactiveFormsModule,
    Validators,
} from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { IUser } from 'src/app/shared/interfaces/mongo-backend';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-step14-user-create',
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
  ],
  templateUrl: './step14-user-create.html',
  styleUrl: './step14-user-create.css',
})
export class Step14UserCreate {
  userService = inject(UserService);

  registrationStatus: { success: boolean; message: string } = {
    success: false,
    message: 'Not attempted yet.',
  };

   form = new FormGroup(
    {
      username: new FormControl('', Validators.required),
      firstname: new FormControl('', Validators.required),
      lastname: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(4),
      ]),
      confirmPassword: new FormControl('', [
        Validators.required,
        Validators.minLength(4),
      ]),
      address: new FormGroup({
        area: new FormControl(''),
        street: new FormControl(''),
        number: new FormControl(''),
        po: new FormControl(''),
        municipality: new FormControl(''),
      })
    },
    this.passwordConfirmsPasswordValidator,
  );

  ngOnInit(): void {}

  passwordConfirmsPasswordValidator(control: AbstractControl): { [key: string]: boolean } | null {
    const form = control as FormGroup;
    
    const password = form.get('password')?.value;
    const confirmPassword = form.get('confirmPassword')?.value;
    
    if (password && confirmPassword && password !== confirmPassword) {
        form.get("confirmPassword")?.setErrors({ passwordMismatch: true });
        return { passwordMismatch: true };
    }
    
    return null;
  }

  onSubmit(value: any) {
    console.log(value);
    
    const user: IUser = {
      username: this.form.get('username')?.value || '',
      password: this.form.get('password')?.value || '',
      firstname: this.form.get('firstname')?.value || '',
      lastname: this.form.get('lastname')?.value || '',
      email: this.form.get('email')?.value || '',
      address: {
        area: this.form.controls.address.get('area')?.value || '',
        street: this.form.controls.address.get('street')?.value || '',
        number: this.form.controls.address.get('number')?.value || '',
        po: this.form.controls.address.get('po')?.value || '',
        municipality: this.form.controls.address.get('municipality')?.value || '',
      },
      roles: []
    };  
    
    this.userService.registerUser(user).subscribe({
      next: (response) => {
        console.log("respon", response);
        this.registrationStatus = { success: true, message: "User registered" };
      },
      error: (response) => {
        const message = response.error.data;
        console.error('Error registering user:', message);
        this.registrationStatus = { success: false, message };
      },
    });
  }

  registerAnother() {
    this.form.reset();
    this.registrationStatus = { success: false, message: 'Not attempted yet.' };
  }

  check_duplicate_email() {
    const email = this.form.get('email')?.value;
    if (email) {
      this.userService.check_duplicate_email(email).subscribe(
        {
        next: (response) => {
          console.log(response);
          this.form.get('email')?.setErrors(null);
        },
        error: (response) => {
          console.log(response);
          const message = response.error;
          console.error(message);
          this.form.get('email')?.setErrors({ duplicateEmail: true });
        },
      }
    );
    }
  }
}
