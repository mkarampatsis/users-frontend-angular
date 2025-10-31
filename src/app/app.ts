import { Component, signal } from '@angular/core';
import { Step2NewComponent } from './components/step2-new-component/step2-new-component';

@Component({
  selector: 'app-root',
  imports: [Step2NewComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('users-frontend-angular');
  // Step 1 One Way binding
  name = 'Markos'

  user = {
    firstname:'Bob',
    lastname: 'Dylan',
    email:'bob.dylan@aueb.gr'
  }
}
