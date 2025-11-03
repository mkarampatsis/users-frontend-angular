import { Component, EventEmitter, Output, ViewChild, AfterViewInit  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { Person } from 'src/app/shared/interfaces/person';

@Component({
  selector: 'app-person-template-form',
  imports: [
    CommonModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule
  ],
  templateUrl: './person-template-form.html',
  styleUrl: './person-template-form.css',
})
export class PersonTemplateForm {
  @Output() person = new EventEmitter<Person>();
  @ViewChild('eForm', { static: false }) form: NgForm | undefined;
  
  ngAfterViewInit(){
    setTimeout(() => {
      if (this.form) {
        this.form.setValue({
          firstname: 'John',
          lastname: 'Doe',
          email: 'john.doe@example.com',
          });
      }
    }, 0); // Delay setting values to next tick
  }

  onSubmit(value: any) {
    console.log(this.form);
    console.log(this.form?.form.get('firstname')!.value);
    console.log(this.form?.form.controls['lastname'].value);
    this.person.emit(value as Person);
  }
  
  onSetValue(){
    this.form?.setValue({
      firstname: 'lakis',
      lastname: 'Doe',
      email: 'john.doe@example.com',
    });
  }
}
