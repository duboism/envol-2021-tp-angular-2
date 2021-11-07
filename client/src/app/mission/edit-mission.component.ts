import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router'

import { MissionService } from './mission.service';
import { AgentService } from '../agent/agent.service';

@Component({
    selector: 'app-edit-mission',
    templateUrl: './edit-mission.component.html',
    styleUrls: ['./edit-mission.component.scss']
})
export class EditMissionComponent {
    constructor(public missionService: MissionService, public agentService: AgentService, private route: ActivatedRoute) { }

    getMission() {
        const idMission = +(this.route.snapshot.paramMap.get('id_mission') as string);
        const mission = this.missionService.missions.find(mission => mission.id_mission === idMission);
        if (mission) {
            return mission;
        } else {
            return null;
        }
    }

    ngOnInit() {
        this.missionService.loadMissionList();
        this.agentService.loadAgentList();
    }
}