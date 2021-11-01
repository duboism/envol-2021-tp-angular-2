import { Component } from '@angular/core';

import { LoginService } from './login.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent {
    email: string = '';
    password: string = '';

    constructor(private loginService: LoginService) { }

    login() {
        this.loginService.login({email: this.email, password: this.password});
    }
}
