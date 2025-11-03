import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { Person } from 'src/app/shared/interfaces/person'

@Component({
  selector: 'app-person-reactive-form',
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule
  ],
  templateUrl: './person-reactive-form.html',
  styleUrl: './person-reactive-form.css',
})
export class PersonReactiveForm {
  @Output() person = new EventEmitter<Person>();

  form = new FormGroup({
    firstname: new FormControl('', Validators.required),
    lastname: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
  });

  onSubmit(){
    if (this.form.valid) {
      // The following is wrong because age is number but in EPerson is string
      // console.log(this.form.value as EPerson)
      console.log(this.form.value)
      const person: Person = {
        firstname: this.form.value.firstname ?? '',
        lastname: this.form.value.lastname ?? '',
        email: this.form.value.email ?? '',
        };
      // this.person.emit(person as EPerson);
      this.person.emit(person)
      this.form.reset();
    }
  }

  onSetValue(){
    this.form.setValue({
      firstname: 'lakis',
      lastname: 'Doe',
      email: 'john.doe@example.com',
    });
  }
}
