import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Mission } from './mission.model';
import { Agent } from '../agent/agent.model';

@Component({
    selector: 'app-mission-form',
    templateUrl: './mission-form.component.html',
    styleUrls: ['./mission-form.component.scss']
})
export class MissionFormComponent implements OnInit {
    @Input() mission: Mission | null = null;
    @Input() agents: Agent[] = [];
    @Output() onSubmit: EventEmitter<Mission> = new EventEmitter();

    missionForm: FormGroup = this.formBuilder.group({
        cost: ['', Validators.compose([Validators.required])],
        country: ['', Validators.compose([Validators.required])],
        date_from: ['', Validators.compose([Validators.required])],
        date_to: ['', Validators.compose([Validators.required])],
        ref_agent: ['', Validators.compose([Validators.required])]
    });

    constructor(private formBuilder: FormBuilder) { }

    ngOnInit() {
        if (this.mission) {
            this.missionForm.controls.cost.setValue(this.mission.cost);
            this.missionForm.controls.country.setValue(this.mission.country);
            this.missionForm.controls.date_from.setValue(new Date(this.mission.date_from));
            this.missionForm.controls.date_to.setValue(new Date(this.mission.date_to));
            this.missionForm.controls.ref_agent.setValue(this.mission.ref_agent);
        }
    }

    submit() {
        let idMission = 0;
        if (this.mission) {
            idMission = this.mission.id_mission;
        }

        this.onSubmit.emit({
            "id_mission": idMission,
            "cost": this.missionForm.controls.cost.value,
            "country": this.missionForm.controls.country.value,
            "date_from": this.missionForm.controls.date_from.value.toISOString().split('T')[0],
            "date_to": this.missionForm.controls.date_to.value.toISOString().split('T')[0],
            "ref_agent": this.missionForm.controls.ref_agent.value,
        });
    }
}
