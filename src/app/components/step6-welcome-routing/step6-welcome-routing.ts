import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-step6-welcome-routing',
  imports: [],
  templateUrl: './step6-welcome-routing.html',
  styleUrl: './step6-welcome-routing.css',
})
export class Step6WelcomeRouting {
  name = 'Coding Factory';
  build = environment.production;
}
