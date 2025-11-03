import { Component } from '@angular/core';
import { PersonTemplateForm } from './person-template-form/person-template-form';
import { Person } from 'src/app/shared/interfaces/person';
import { Step8SimpleDataTableShow } from '../step8-simple-data-table-show/step8-simple-data-table-show';
import { Step3PersonTableInput } from '../step3-person-table-input/step3-person-table-input';
import { Step8SimpleDataTable } from "../step8-simple-data-table/step8-simple-data-table";

@Component({
  selector: 'app-step10-template-driven-forms',
  imports: [
    PersonTemplateForm,
    Step3PersonTableInput,
    Step8SimpleDataTable
],
  templateUrl: './step10-template-driven-forms.html',
  styleUrl: './step10-template-driven-forms.css',
})
export class Step10TemplateDrivenForms {
  currentPerson: Person | undefined;
  persons: Person[] = [];

  onPerson(person: Person) {
    this.currentPerson = person;
    this.persons.push(person);
  }
}
