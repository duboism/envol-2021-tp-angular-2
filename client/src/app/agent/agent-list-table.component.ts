import { Component, Input } from '@angular/core';

import { Agent } from './agent.model';

@Component({
    selector: 'app-agent-list-table',
    templateUrl: './agent-list-table.component.html',
    styleUrls: ['./agent-list-table.component.scss']
})
export class AgentListTableComponent {
    @Input() agents: Agent[] = [];
}