import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    let token  = localStorage.getItem("token"); //token'i yakalamak için
    let newRequest : HttpRequest<any>; //yeni ürün eklemek için
    newRequest = request.clone({ //yeni ürünleri klonlar
      headers:request.headers.set("Authorization","Bearer " + token)
    })
    return next.handle(newRequest);
  }
}
