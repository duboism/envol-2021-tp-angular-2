import { Component, OnInit } from '@angular/core';

import { LoginService } from './login/login.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    constructor(private loginService: LoginService) { }

    ngOnInit() {
        this.loginService.restoreTokenFromLocalStorage();
    }

    getUserToken() {
        return this.loginService.userToken;
    }

    logout() {
        this.loginService.clearTokenFromLocalStorage();
    }

    getEmail() {
        return 'admin@envol.fr';
    }
}
