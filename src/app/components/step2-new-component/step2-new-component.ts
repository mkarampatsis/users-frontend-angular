import { Component } from '@angular/core';

@Component({
  selector: 'app-step2-new-component',
  imports: [],
  templateUrl: './step2-new-component.html',
  styleUrl: './step2-new-component.css',
})
export class Step2NewComponent {
  user = {
    firstname:'Bob',
    lastname: 'Dylan',
    email:'bob.dylan@aueb.gr'
  }
}
