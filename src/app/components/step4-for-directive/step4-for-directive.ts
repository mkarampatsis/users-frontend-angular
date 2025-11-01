import { Component } from '@angular/core';
import { Person } from 'src/app/shared/interfaces/person';
import { Step3PersonTableInput } from '../step3-person-table-input/step3-person-table-input';

@Component({
  selector: 'app-step4-for-directive',
  imports: [Step3PersonTableInput],
  templateUrl: './step4-for-directive.html',
  styleUrl: './step4-for-directive.css',
})
export class Step4ForDirective {
  
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
