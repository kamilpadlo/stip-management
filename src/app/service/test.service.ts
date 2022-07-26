import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee } from '../main/models/employee-model/employee.model';

@Injectable({
  providedIn: 'root',
})
export class TestService {
  constructor(private http: HttpClient) {}

  // Czy <Employee[]> w tym przypadku jest zbędny i powinienem go czymś zastąpić?

  getUsersFake(): Observable<Employee[]> {
    return this.http.get<Employee[]>(
      `https://jsonplaceholder.typicode.com/users`
    );
  }
  getUsers(): Observable<Employee[]> {
    return this.http.get<Employee[]>(
      `https://schema.getpostman.com/json/collection/v2.1.0/collection.json`
    );
  }
}
