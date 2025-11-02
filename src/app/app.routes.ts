import { Routes } from '@angular/router';
import { Step2PersonTable } from './components/step2-person-table/step2-person-table';
import { Step3PersonTableInput } from './components/step3-person-table-input/step3-person-table-input';
import { Step4ForDirective } from './components/step4-for-directive/step4-for-directive';
import { Step5EventBind } from './components/step5-event-bind/step5-event-bind';
import { Step6WelcomeRouting } from './components/step6-welcome-routing/step6-welcome-routing';
import { Step8SimpleDataTableShow } from './components/step8-simple-data-table-show/step8-simple-data-table-show';
import { Step9ComponentOutput } from './components/step9-component-output/step9-component-output';

// Changes on Step 6 when creating Routes
export const routes: Routes = [
  {
    path: 'person-table-example',
    component: Step2PersonTable,
  },
  {
    path: 'component-input-example',
    component: Step3PersonTableInput,
  },
  { path: 'for-directive-example', component: Step4ForDirective },
  { path: 'event-bind-example', component: Step5EventBind },
  { path: 'simple-data-table-example', component: Step8SimpleDataTableShow },
  { path: 'component-output-example', component: Step9ComponentOutput },
  { path: 'welcome', component: Step6WelcomeRouting },
  { path: '', redirectTo: '/welcome', pathMatch: 'full' },
];
