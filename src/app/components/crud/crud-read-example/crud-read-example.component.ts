import { Component, inject, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CrudNavbarComponent } from '../crud-navbar/crud-navbar.component';
import { IUser } from 'src/app/shared/interfaces/mongo-backend';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
    selector: 'app-crud-read-example',
    imports: [CommonModule, CrudNavbarComponent],
    templateUrl: './crud-read-example.component.html',
    styleUrl: './crud-read-example.component.css'
})
export class CrudReadExampleComponent implements OnInit {
  
  userService = inject(UserService);

  users = signal<IUser[]>([]);
  
  ngOnInit(): void {
    this.userService.getAllUsers()
      .subscribe((result) => {
        this.users.set(result)
      })  
  }
}
