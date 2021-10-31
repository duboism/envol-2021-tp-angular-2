import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    title: string = 'client';
    email: string = '';
    password: string = '';
    token: string = '';

    constructor(private httpClient: HttpClient) { }

    login() {
        this.httpClient.post<{userId: number, token: string}>('http://localhost:3000/users/login', { email: this.email, password: this.password}).subscribe(data => {
            this.token = data.token;
        });
    }
}
