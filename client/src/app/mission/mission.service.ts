import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Mission } from './mission.model';

@Injectable()
export class MissionService {
    missions: Mission[] = [];
    missionsIsLoading: boolean = false;
    missionsIsLoaded: boolean = false;

    constructor(private httpClient: HttpClient) { }

    loadMissionList() {
        this.missionsIsLoading = true;
        this.missionsIsLoaded = false;
        this.httpClient.get<any>('http://localhost:3000/missions').subscribe(data => {
            this.missions = data;
            this.missionsIsLoading = false;
            this.missionsIsLoaded = true;
        });
    }
    
    editMission(mission: Mission) {

    }

    delMission(mission: Mission) {

    }
}
