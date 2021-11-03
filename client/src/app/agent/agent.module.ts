import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AgentRoutingModule } from './agent-routing.module';
import { AgentService } from './agent.service';
import { AgentListComponent } from './agent-list.component';
import { AgentListTableComponent } from './agent-list-table.component';

@NgModule({
    declarations: [
        AgentListComponent,
        AgentListTableComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        AgentRoutingModule
    ],
    providers: [
        AgentService
    ]
})
export class AgentModule { }