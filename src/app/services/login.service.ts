import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginData } from '../interfaces/login.interface';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  apiUrl = '/WebAPI/api';
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }

  login(login: LoginData) {
    const additionalPart = "Cuenta/Login"; 
    return this.http.post<any>(`${this.apiUrl}/${additionalPart}`, login, this.httpOptions);
  }
}
