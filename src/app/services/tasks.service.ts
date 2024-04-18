import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  apiUrl = '/WebAPI/api';

  constructor(private http: HttpClient) { }

  getAccounts() {
    const additionalPart = "/CXC/Senior/Accounts"; 
    return this.http.get<any>(`${this.apiUrl}/${additionalPart}`);
  }
}
