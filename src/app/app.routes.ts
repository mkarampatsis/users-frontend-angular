import { Routes } from '@angular/router';
import { Step2PersonTable } from './components/step2-person-table/step2-person-table';
import { Step3PersonTableInput } from './components/step3-person-table-input/step3-person-table-input';
import { Step4ForDirective } from './components/step4-for-directive/step4-for-directive';
import { Step5EventBind } from './components/step5-event-bind/step5-event-bind';
import { Step6WelcomeRouting } from './components/step6-welcome-routing/step6-welcome-routing';
import { Step8SimpleDataTableShow } from './components/step8-simple-data-table-show/step8-simple-data-table-show';
import { Step9ComponentOutput } from './components/step9-component-output/step9-component-output';
import { Step10TemplateDrivenForms } from './components/step10-template-driven-forms/step10-template-driven-forms';
import { Step11ReactiveForms } from './components/step11-reactive-forms/step11-reactive-forms';
import { Step12HttpClientService } from './components/step12-http-client-service/step12-http-client-service';
import { Step13UserLogin } from './components/step13-user-login/step13-user-login';
import { RestrictedContentExampleComponent } from './components/restricted-content-example/restricted-content-example.component';
import { authGuard } from './shared/guards/auth.guard';
import { adminRoleGuard } from './shared/guards/admin-role.guard';
import { CrudDashboardComponent } from './components/crud/crud-dashboard/crud-dashboard.component';
import { CrudCreateExampleComponent } from './components/crud/crud-create-example/crud-create-example.component';
import { CrudReadExampleComponent } from './components/crud/crud-read-example/crud-read-example.component';
import { CrudUpdateExampleComponent } from './components/crud/crud-update-example/crud-update-example.component';
import { CrudDeleteExampleComponent } from './components/crud/crud-delete-example/crud-delete-example.component';

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
  { path: 'template-driven-form-example', component: Step10TemplateDrivenForms },
  { path: 'reactive-form-example', component: Step11ReactiveForms },
  { path: 'http-client-example', component: Step12HttpClientService },
  { path: 'user-login-example', component: Step13UserLogin },
  { path: 'restricted-content-example', component: RestrictedContentExampleComponent },
  // For Crud Example
  {
    path: 'crud-example',
    component: CrudDashboardComponent,
    canActivate: [authGuard, adminRoleGuard],
  },
  {
    path: 'crud-example/create',
    component: CrudCreateExampleComponent,
    canActivate: [authGuard, adminRoleGuard],
  },
  {
    path: 'crud-example/read',
    component: CrudReadExampleComponent,
    canActivate: [authGuard],
  },
  {
    path: 'crud-example/update',
    component: CrudUpdateExampleComponent,
    canActivate: [authGuard, adminRoleGuard],
  },
  {
    path: 'crud-example/delete',
    component: CrudDeleteExampleComponent,
    canActivate: [authGuard, adminRoleGuard],
  },
  { path: 'welcome', component: Step6WelcomeRouting },
  { path: '', redirectTo: '/welcome', pathMatch: 'full' },
];
