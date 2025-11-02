import { Component } from '@angular/core';
import { Person, ManyPerson } from 'src/app/shared/interfaces/person';
import { Step8SimpleDataTable } from '../step8-simple-data-table/step8-simple-data-table';

@Component({
  selector: 'app-step9-component-output',
  imports: [Step8SimpleDataTable],
  templateUrl: './step9-component-output.html',
  styleUrl: './step9-component-output.css',
})
export class Step9ComponentOutput {
  manyPerson = ManyPerson;

  showPersonClicked(person: Person) {
    alert(this.personTemplate(person));
  }

  personTemplate(person: Person) {
    return `
    Person Details:

    First Name: ${person.firstname}
    Last Name: ${person.lastname}
    Email: ${person.email}
    `;
  }
}
