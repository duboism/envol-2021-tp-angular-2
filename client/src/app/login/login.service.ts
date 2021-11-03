import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

import { ToastrService } from 'ngx-toastr';

import { UserLogin } from './user-login.model';
import { UserToken  } from './user-token.model';

@Injectable()
export class LoginService {
    userToken: UserToken = null as any;

    constructor(private httpClient: HttpClient, private toastr: ToastrService, private router: Router) { }

    login(userlogin: UserLogin) {
        this.httpClient.post<UserToken>('http://localhost:3000/users/login', userlogin).subscribe(data => {
            this.userToken = data;
            this.saveTokenToLocalStorage();
            this.toastr.success('Vous êtes maintenant connecté à l\'application', 'Connexion réussie');
            this.router.navigate(['mission-list']);
        }, (response: HttpErrorResponse) => {
            this.toastr.error(response.error, 'Connexion échoué');
        });
    }

    saveTokenToLocalStorage() {
        const userTokenJson = JSON.stringify(this.userToken);
        localStorage.setItem('userToken', userTokenJson);
    }

    restoreTokenFromLocalStorage() {
        const userTokenJson = localStorage.getItem('userToken');
        if (userTokenJson) {
            this.userToken = JSON.parse(userTokenJson);
        }
    }

    clearTokenFromLocalStorage() {
        localStorage.removeItem('userToken');
        this.userToken = null as any;
        this.router.navigate(['login']);
        this.toastr.success('Vous êtes maintenant deconnecté de l\'application', 'Deconnexion réussie');
    }
}