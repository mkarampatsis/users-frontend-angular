import { Component, signal } from '@angular/core';
import { Step2PersonTable } from './components/step2-person-table/step2-person-table';
import { Step3PersonTableInput } from './components/step3-person-table-input/step3-person-table-input';
import { Step4ForDirective } from './components/step4-for-directive/step4-for-directive';
import { Step5EventBind } from './components/step5-event-bind/step5-event-bind';
import { Person } from './shared/interfaces/person';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Step7ListGroupMenu } from './components/step7-list-group-menu/step7-list-group-menu';

@Component({
  selector: 'app-root',
  imports: [
    RouterLink, 
    RouterOutlet, 
    Step2PersonTable, 
    Step3PersonTableInput, 
    Step4ForDirective,
    Step5EventBind,
    Step7ListGroupMenu
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('users-frontend-angular');
  // Step 1 One Way binding
  name = 'Markos'

  user = {
    firstname: 'Bob',
    lastname: 'Dylan',
    email: 'bob.dylan@aueb.gr'
  }

  // Step 3 for input component
  person1: Person = {
    firstname: 'Bob',
    lastname: 'Dylan',
    email: 'bob.dylan@aueb.gr'
  }

  person2: Person = {
    firstname: 'George',
    lastname: 'Harrison',
    email: 'george.harrison@aueb.gr'
  }

  // Step 7 fancy menu created disable the rest
  doNotShowRest:boolean = true 
}
