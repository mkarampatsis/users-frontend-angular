import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgFor, NgIf } from '@angular/common';
import { CrudNavbarComponent } from '../crud-navbar/crud-navbar.component';
import {
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
import { UserService } from 'src/app/shared/services/user.service';
import { IPhone, IUser } from 'src/app/shared/interfaces/mongo-backend';

@Component({
    selector: 'app-crud-update-example',
    imports: [
      CommonModule,
      CrudNavbarComponent,
      ReactiveFormsModule,
      MatFormFieldModule,
      MatInputModule,
      MatSelectModule,
      MatButtonModule,
      MatIconModule,
      NgFor, NgIf
    ],
    templateUrl: './crud-update-example.component.html',
    styleUrl: './crud-update-example.component.css'
})
export class CrudUpdateExampleComponent {
  userService = inject(UserService);

  registrationStatus: { success: boolean; message: string } = {
    success: false,
    message: 'Not attempted yet.',
  };

  searchForm = new FormGroup({
    search: new FormControl(''),
  });

  form = new FormGroup({
    username: new FormControl({value: '', disabled: true}, Validators.required),
    firstname: new FormControl('', Validators.required),
    lastname: new FormControl('', Validators.required),
    email: new FormControl({value: '', disabled: true}, [Validators.required, Validators.email]),
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
  });

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

  search() {
    // const searchValue = this.searchForm.value.search;
    const searchValue = this.searchForm.value.search!;
    this.userService.getUserByEmail(searchValue)
      .subscribe((result) => {
        this.form.patchValue({
          username: result.username,
          firstname: result.firstname,
          lastname: result.lastname,
          email: result.email,
          address: result.address,
        });

        // Clear the existing FormArray
        this.phone.clear();

        console.log(result.phone, result.phone?.length)
        if (result.phone?.length) {
          // Add a new FormGroup to the FormArray for each phoneNumber
          result.phone?.forEach((phoneNumber) => {
            this.phone.push(this.createPhoneNumberFormGroup(phoneNumber));
          });
        } else {
          this.phone.push(
            new FormGroup({
              number: new FormControl('', Validators.required),
              type: new FormControl('', Validators.required),
            }));
        }
      });
  }

  createPhoneNumberFormGroup(phoneNumber: IPhone): FormGroup {
    return new FormGroup({
      number: new FormControl(phoneNumber.number, Validators.required),
      type: new FormControl(phoneNumber.type, Validators.required),
    });
  }
  
  submit() {
    const username = this.form.controls.username.value || '';
    this.userService.updateUser(username, this.form.value as IUser ).subscribe({
      next: (response) => {
        this.form.reset();
        this.registrationStatus = { success: true, message: "User updated" };
      },
      error: (error) => {
        console.error('There was an error!', error.message);
        const message = error.message;
        this.registrationStatus = { success: false, message };
      },
    });
  }
}
