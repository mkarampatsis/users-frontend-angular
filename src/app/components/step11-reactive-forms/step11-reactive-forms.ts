import { Component } from '@angular/core';
import { PersonReactiveForm } from './person-reactive-form/person-reactive-form';
import { Step3PersonTableInput } from '../step3-person-table-input/step3-person-table-input';
import { Step8SimpleDataTable } from '../step8-simple-data-table/step8-simple-data-table';
import { Person } from 'src/app/shared/interfaces/person';

@Component({
  selector: 'app-step11-reactive-forms',
  imports: [
    PersonReactiveForm,
    Step3PersonTableInput,
    Step8SimpleDataTable
  ],
  templateUrl: './step11-reactive-forms.html',
  styleUrl: './step11-reactive-forms.css',
})
export class Step11ReactiveForms {
currentPerson: Person | undefined;
  persons: Person[] = [];

  onPerson(person: Person) {
    this.currentPerson = person;
    this.persons = [...this.persons, person];
    // this.persons.push(person);
  }
}

// this.persons.push(person) (Mutates the Array)
// This directly modifies the existing array.
// Angular might not detect the change in certain scenarios (especially if passed as an @Input() to a child component).
// If the component or pipe relies on object reference change (e.g., OnPush change detection strategy or ngOnChanges()), the update may not trigger.
// this.persons = [...this.persons, person] (Creates a New Array)
// This creates a new array reference with the new person added.
// Angular will detect the change, because the reference to the array changes.
// It's the recommended way when working with @Input() bindings, especially if you want the receiving component to react properly to updates.

