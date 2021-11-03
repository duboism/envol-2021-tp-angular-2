import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';

import { LoginService } from './login.service';

@Injectable()
export class TokenInterceptorService implements HttpInterceptor {
    constructor(private loginService: LoginService) {}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const userToken = this.loginService.userToken;
        let newHeaders = req.headers;
        if (userToken) {
            newHeaders = newHeaders.append('Authorization', `Bearer ${userToken.token}`);
        }

        return next.handle(req.clone({headers: newHeaders}));
    }
}
