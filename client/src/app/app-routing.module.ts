import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MissionListComponent } from './mission-list.component';
import { AuthGuard } from './login/auth.guard';

const routes: Routes = [
    { path: '', redirectTo: 'mission-list', pathMatch: 'full' },
    { path: 'mission-list', component: MissionListComponent, canActivate: [AuthGuard] }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
