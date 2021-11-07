import { Component } from '@angular/core';

import { MissionService } from './mission.service';
import { AgentService } from '../agent/agent.service';

@Component({
    selector: 'app-new-mission',
    templateUrl: './new-mission.component.html',
    styleUrls: ['./new-mission.component.scss']
})
export class NewMissionComponent {
    constructor(public missionService: MissionService, public agentService: AgentService) { }

    ngOnInit() {
        this.missionService.loadMissionList();
        this.agentService.loadAgentList();
    }
}