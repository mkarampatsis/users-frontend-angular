import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { MenuEntry } from 'src/app/shared/interfaces/menu-entry';

@Component({
  selector: 'app-step7-list-group-menu',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './step7-list-group-menu.html',
  styleUrl: './step7-list-group-menu.css',
})
export class Step7ListGroupMenu {
  menu: MenuEntry[] = [
    { text: 'Step2 Person Table', routerLink: 'person-table-example' },
    { text: 'Step3 Component Input (no data)', routerLink: 'component-input-example' },
    { text: 'Step4 @for Directive', routerLink: 'for-directive-example' },
    { text: 'Step5 Event Bind', routerLink: 'event-bind-example' },
    {
      text: 'Step8 Simple Data Table',
      routerLink: 'simple-data-table-example',
    },
    {
      text: 'Step9 Component Output',
      routerLink: 'component-output-example',
    },
  ];
}
