import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AccountsData } from '../interfaces/accounts.interface';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  apiUrl = '/WebAPI/api';
  additionalPart = "CXC/Senior/Accounts";

  constructor(private http: HttpClient) { }

  getAccounts() {
    return this.http.get<any>(`${this.apiUrl}/${this.additionalPart}`);
  }

  createAccount(account: any){
    return this.http.post<any>(`${this.apiUrl}/${this.additionalPart}`, account);
  }
}
