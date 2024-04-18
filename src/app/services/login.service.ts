import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginData } from '../interfaces/login.interface';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  apiUrl = '/WebAPI/api/Cuenta/Login';
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }

  login(login: LoginData) {
    return this.http.post<any>(`${this.apiUrl}`, login, this.httpOptions);
  }
}
