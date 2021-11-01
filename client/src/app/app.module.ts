import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { ToastrModule } from 'ngx-toastr';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginModule } from './login/login.module';
import { MissionListComponent } from './mission-list.component';

@NgModule({
    declarations: [
        AppComponent,
        MissionListComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        HttpClientModule,
        ToastrModule.forRoot(),
        LoginModule,
        AppRoutingModule
    ],
    providers: [ ],
    bootstrap: [ AppComponent ]
})
export class AppModule { }
