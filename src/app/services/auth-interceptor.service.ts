import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthInterceptorService implements HttpInterceptor {

  constructor() {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
  
    const localToken = localStorage.getItem('token');

    let request = req;

    if (localToken) {
      request = req.clone({
        setHeaders: {
          authorization: `Bearer ${ localToken }`
        }
      });
    }

    return next.handle(request);
  }

}