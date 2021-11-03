import { Component, EventEmitter, Input, Output } from '@angular/core';

import { Mission } from './mission.model';
import { Agent } from '../agent/agent.model';

@Component({
    selector: 'app-mission-list-table',
    templateUrl: './mission-list-table.component.html',
    styleUrls: ['./mission-list-table.component.scss']
})
export class MissionListTableComponent {
    @Input() missions: Mission[] = [];
    @Input() agents: Agent[] = [];
    @Output() deleteMission: EventEmitter<number> = new EventEmitter();

    getFullNameByIdAgent(idAgent: number): string {
        const agent = this.agents.find(agent => agent.id_agent === idAgent);
        return `${agent?.firstname} ${agent?.lastname}`;
    }
}
