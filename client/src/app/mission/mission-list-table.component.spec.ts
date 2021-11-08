import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { MissionListTableComponent } from "./mission-list-table.component";

describe('Test du component MissionListTableComponent', () => {
    let component: MissionListTableComponent;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [
                MissionListTableComponent
            ],
            imports: [
                RouterTestingModule
            ]
        }).compileComponents();
        const fixture = TestBed.createComponent(MissionListTableComponent);
        component = fixture.componentInstance;
    });

    it('should create the component', () => {
        expect(component).toBeTruthy();
    });

    it('#getFullNameByIdAgent(idAgent) should return agent full name', () => {
        component.agents.push({
            id_agent: 5,
            firstname: 'Mickey',
            lastname: 'Mouse',
            status: 'Chercheur',
            cap: 1
        });

        expect(component.getFullNameByIdAgent(5)).toEqual('Mickey Mouse');
    });
});