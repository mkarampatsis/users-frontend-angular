import { Component, inject, signal } from '@angular/core';
import { CrudNavbarComponent } from '../crud-navbar/crud-navbar.component';
import { UserService } from 'src/app/shared/services/user.service';
import { IUser } from 'src/app/shared/interfaces/mongo-backend';

@Component({
    selector: 'app-crud-delete-example',
    imports: [CrudNavbarComponent],
    templateUrl: './crud-delete-example.component.html',
    styleUrl: './crud-delete-example.component.css'
})
export class CrudDeleteExampleComponent {
  userService = inject(UserService);

  users = signal<IUser[]>([]);
  
  registrationStatus: { success: boolean; message: string } = {
    success: false,
    message: 'Not attempted yet.',
  };

  ngOnInit(): void {
    this.getAllUsers(); 
  }

  getAllUsers(){
    this.userService.getAllUsers()
      .subscribe((result) => {
        this.users.set(result)
      })  
  }

  addressJoin(user:IUser) {
    return user.address? user.address?.area + ', '+ user.address?.street+', '+user.address?.number: '-'
  }

  deleteUser(user:IUser){
    this.userService.deleteUser(user.username)
      .subscribe({
        next: (response) => {
          this.registrationStatus = { success: true, message: "User registered" };
          this.getAllUsers();
        },
        error: (error) => {
          console.error('There was an error!', error.message);
          const message = error.message;
          this.registrationStatus = { success: false, message };
        },
      })
  }
}
