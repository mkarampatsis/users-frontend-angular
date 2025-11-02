import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Person } from 'src/app/shared/interfaces/person';
import { sortBy } from 'lodash-es';

@Component({
  selector: 'app-step8-simple-data-table',
  imports: [],
  templateUrl: './step8-simple-data-table.html',
  styleUrl: './step8-simple-data-table.css',
})
export class Step8SimpleDataTable {
  @Input() data: Person[] | undefined;
  // Added in step 9 for output component
  @Output() personCLicked = new EventEmitter<Person>();
  
  sortOrder = {
    firstname: 'none',
    lastname: 'none',
    email: 'none',
  };;

//   sortData(sortKey: string): void {
  sortData(sortKey: keyof Person): void {
    if (this.sortOrder[sortKey] === 'asc') {
      this.sortOrder[sortKey] = 'desc';
      this.data = sortBy(this.data, sortKey).reverse();
    } else {
      this.sortOrder[sortKey] = 'asc';
      this.data = sortBy(this.data, sortKey);
    }

    for (let key in this.sortOrder) {
      if (key !== sortKey) {
        this.sortOrder[key as keyof Person] = 'none';
      }
    }
  }

//   sortSign(sortKey: string): string {
    sortSign(sortKey: keyof Person): string {
    if (this.sortOrder[sortKey] === 'asc') return  '\u2191'
    else if (this.sortOrder[sortKey] === 'desc') return '\u2193';
    else return '';
  }
  // Unicodes
  // ↑	U+2191	Up arrow
  // ↓	U+2193	Down arrow

  
  onPersonClicked(person: Person) {
    console.log(person)
  }
}
