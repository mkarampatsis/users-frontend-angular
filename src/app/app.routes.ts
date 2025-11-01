import { Routes } from '@angular/router';
import { Step2PersonTable } from './components/step2-person-table/step2-person-table';
import { Step3PersonTableInput } from './components/step3-person-table-input/step3-person-table-input';
import { Step4ForDirective } from './components/step4-for-directive/step4-for-directive';
import { Step5EventBind } from './components/step5-event-bind/step5-event-bind';
import { Step6WelcomeRouting } from './components/step6-welcome-routing/step6-welcome-routing';

// Changes on Step 6 when creating Routes
export const routes: Routes = [
  {
    path: 'persontable',
    component: Step2PersonTable,
  },
  {
    path: 'persontableinput',
    component: Step3PersonTableInput,
  },
  { path: 'fordirective', component: Step4ForDirective },
  { path: 'eventbind', component: Step5EventBind },
  { path: 'welcome', component: Step6WelcomeRouting },
  { path: '', redirectTo: '/welcome', pathMatch: 'full' },
];
