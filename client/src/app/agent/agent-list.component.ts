import { Component, OnInit } from '@angular/core';

import { AgentService } from './agent.service';

@Component({
    selector: 'app-agent-list',
    templateUrl: './agent-list.component.html',
    styleUrls: ['./agent-list.component.scss']
})
export class AgentListComponent implements OnInit {
    constructor(public agentService: AgentService) { }

    ngOnInit() {
        this.agentService.loadAgentList();
    }
}
