import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AgentListComponent } from './agent-list.component';
import { AuthGuard } from '../login/auth.guard';

const routes: Routes = [
    { path: 'agent-list', component: AgentListComponent, canActivate: [AuthGuard] }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AgentRoutingModule { }
