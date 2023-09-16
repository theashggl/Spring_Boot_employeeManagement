import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from './employee';

@Injectable({
  //This decorator means that the class is actually a service. To be able to use this service somewhere, this service can be injected into components which needs it.
  providedIn: 'root',
})
export class EmployeeService {
  private baseURL = 'http://localhost:8080/api/v1/employees'; //This line defines the url which this service will use to fetch data.
  constructor(
    private httpClient: HttpClient //Need to use http client like this to use http api data
  ) {}
  getEmployeeList(): Observable<Employee[]> {
    //This method provides the base method that needs to be called and then subscribe to the incoming data to fill the respective variable that will contain the data.
    //observable provides support for passing messages between parts of your application. They are used frequently in Angular and are a technique for event handling, asynchronous programming, and handling multiple values.
    return this.httpClient.get<Employee[]>(`${this.baseURL}`); //This way we can call the get method od the baseURL variable link.
  }

  createEmployee(employee: Employee): Observable<Object> {
    return this.httpClient.post(`${this.baseURL}`, employee);
  }

  getEmployeeById(id: number): Observable<Employee> {
    return this.httpClient.get<Employee>(`${this.baseURL}/${id}`);
  }

  updateEmployee(id: number, employee: Employee): Observable<Object> {
    return this.httpClient.put(`${this.baseURL}/${id}`, employee);
  }

  deleteEmployee(id: number): Observable<Object> {
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }
}
