import { Component, OnInit } from '@angular/core';

import { MissionService } from './mission.service';
import { AgentService } from '../agent/agent.service';

@Component({
    selector: 'app-mission-list',
    templateUrl: './mission-list.component.html',
    styleUrls: ['./mission-list.component.scss']
})
export class MissionListComponent implements OnInit {
    constructor(public missionService: MissionService, public agentService: AgentService) { }

    ngOnInit() {
        this.missionService.loadMissionList();
        this.agentService.loadAgentList();
    }
}
