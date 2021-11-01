import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
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
            this.toastr.success('Vous êtes maintenant connecté à l\'application', 'Connexion réussie');
            this.router.navigate(['mission-list']);
        });
    }
}