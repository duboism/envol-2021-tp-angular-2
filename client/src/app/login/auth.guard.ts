import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
 
import { ToastrService } from 'ngx-toastr';

import { LoginService } from './login.service';

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(private loginService: LoginService, private toastr: ToastrService, private router: Router) { }

    canActivate(): boolean {
        if (this.loginService.userToken) {
            return true;
        } else {
            this.toastr.error('Veuillez vous identifier pour accèder à l\'application', 'Authorization');
            this.router.navigate(['login']);
            return false;
        }
    }
}
