import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CrudNavbarComponent } from '../crud-navbar/crud-navbar.component';
// import { CustomerService } from 'src/app/shared/services/customer.service';
import { UserService } from 'src/app/shared/services/user.service';
import {
  AbstractControl,
  FormArray,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
// import { Customer } from 'src/app/shared/interfaces/customer';
import { IUser } from 'src/app/shared/interfaces/mongo-backend';

@Component({
  selector: 'app-crud-create-example',
  imports: [
    CommonModule,
    ReactiveFormsModule,
    CrudNavbarComponent,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatIconModule,
  ],
  templateUrl: './crud-create-example.component.html',
  styleUrl: './crud-create-example.component.css'
})
export class CrudCreateExampleComponent {
  userService = inject(UserService);

  registrationStatus: { success: boolean; message: string } = {
    success: false,
    message: 'Not attempted yet.',
  };

  form = new FormGroup({
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
      street: new FormControl('')
    }),
    phone: new FormArray([
      new FormGroup({
        number: new FormControl('', Validators.required),
        type: new FormControl('', Validators.required),
      }),
    ]),
  },
    this.passwordConfirmsPasswordValidator,
  );

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

  phone = this.form.get('phone') as FormArray;

  addPhoneNumber() {
    this.phone.push(
      new FormGroup({
        number: new FormControl('', Validators.required),
        type: new FormControl('', Validators.required),
      }),
    );
  }

  removePhoneNumber(index: number) {
    this.phone.removeAt(index);
  }

  submit(value: any) {
    const user = this.form.value as IUser;

    this.userService.registerUser(user).subscribe({
      next: (response) => {
        this.form.reset();
        this.registrationStatus = { success: true, message: "User registered" };
      },
      error: (error) => {
        console.error('There was an error!', error.message);
        const message = error.message;
        this.registrationStatus = { success: false, message };
      },
    });
  }

  check_duplicate_email() {
    const email = this.form.get('email')?.value;
    if (email) {
      this.userService.getUserByEmail(email).subscribe({
        next: (response) => {
          console.log(response);
          this.form.get('email')?.setErrors({ duplicateEmail: true });
        },
        error: (response) => {
          console.log("OK EMAIL",response);
          this.form.get('email')?.setErrors(null);
        },
      });
    }
  }
}
