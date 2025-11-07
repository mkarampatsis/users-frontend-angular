import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { environment } from 'src/environments/environment.development';
// import { Customer } from 'src/app/shared/interfaces/customer';
import { IUser } from '../interfaces/mongo-backend';

// const API_URL = `${environment.apiURL}/customer`;
const API_URL = `${environment.apiURL}/api/users`;

@Injectable({
  providedIn: 'root',
})
export class CustomerService {
  http: HttpClient = inject(HttpClient);

  // createCustomer(customer: Customer) {
  //   return this.http.post<{ msg: string }>(`${API_URL}/create`, customer);
  // }
  createCustomer(customer: IUser) {
    return this.http.post<{ status:boolean, data: string }>(`${API_URL}`, customer);
  }

  // getCustomerByAFM(afm: string) {
  //   return this.http.get<Customer>(`${API_URL}/afm/${afm}`);
  // }

  getCustomerByUsername(username: string) {
    return this.http.get<{status:boolean, data: IUser}>(`${API_URL}/${username}`);
  }

  check_duplicate_email(email: string) {
    return this.http.get<{ msg: string }>(
      `${API_URL}/check_duplicate_email/${email}`,
    );
  }
}
