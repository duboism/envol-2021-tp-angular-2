import { Component, Input } from '@angular/core';

import { Mission } from './mission.model';

@Component({
    selector: 'app-mission-list-table',
    templateUrl: './mission-list-table.component.html',
    styleUrls: ['./mission-list-table.component.scss']
})
export class MissionListTableComponent {
    @Input() missions: Mission[] = [];
}