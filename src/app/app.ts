import { Component, signal } from '@angular/core';
import { Step2PersonTable } from './components/step2-person-table/step2-person-table';
import { Step3PersonTableInput } from './components/step3-person-table-input/step3-person-table-input';
import { Person } from './shared/interfaces/person';

@Component({
  selector: 'app-root',
  imports: [Step2PersonTable, Step3PersonTableInput],
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

  // Step 4 for @for
  // https://www.mockaroo.com/ for sample data
  persons: Person[] = [
    { "firstname": "Jordanna", "lastname": "Deekes", "email": "jdeekes0@cloudflare.com" },
    { "firstname": "Clarette", "lastname": "Hillitt", "email": "chillitt1@bbc.co.uk" },
    { "firstname": "Lewiss", "lastname": "Pancast", "email": "lpancast2@google.fr" },
    { "firstname": "Tara", "lastname": "Olrenshaw", "email": "tolrenshaw3@hugedomains.com" },
    { "firstname": "Edna", "lastname": "Imorts", "email": "eimorts4@wordpress.com" },
    { "firstname": "Colan", "lastname": "Greenfield", "email": "cgreenfield5@multiply.com" },
    { "firstname": "Ferdy", "lastname": "Barraclough", "email": "fbarraclough6@ameblo.jp" },
    { "firstname": "Iain", "lastname": "Zanardii", "email": "izanardii7@chicagotribune.com" },
    { "firstname": "Rikki", "lastname": "Lowton", "email": "rlowton8@va.gov" },
    { "firstname": "Chaunce", "lastname": "Rivalland", "email": "crivalland9@goo.gl" },
    { "firstname": "Edward", "lastname": "Butterick", "email": "ebuttericka@indiatimes.com" },
    { "firstname": "Gal", "lastname": "Eastabrook", "email": "geastabrookb@boston.com" },
    { "firstname": "Shelbi", "lastname": "Hanaby", "email": "shanabyc@biblegateway.com" },
    { "firstname": "Harriett", "lastname": "Ralling", "email": "hrallingd@studiopress.com" },
    { "firstname": "Bradford", "lastname": "Boatman", "email": "bboatmane@uol.com.br" },
    { "firstname": "Consuela", "lastname": "Hames", "email": "chamesf@cbc.ca" },
    { "firstname": "Bird", "lastname": "Rollingson", "email": "brollingsong@youku.com" },
    { "firstname": "Rachelle", "lastname": "Jerschke", "email": "rjerschkeh@yandex.ru" },
    { "firstname": "Nilson", "lastname": "Lodeke", "email": "nlodekei@squarespace.com" },
    { "firstname": "Maribelle", "lastname": "Flett", "email": "mflettj@amazon.com" }
  ]
}
