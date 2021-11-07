import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

import { ToastrService } from 'ngx-toastr';

import { Mission } from './mission.model';

@Injectable()
export class MissionService {
    missions: Mission[] = [];
    missionsIsLoading: boolean = false;
    missionsIsLoaded: boolean = false;

    constructor(private httpClient: HttpClient, private toastr: ToastrService, private router: Router) { }

    loadMissionList() {
        this.missionsIsLoading = true;
        this.missionsIsLoaded = false;
        this.httpClient.get<Mission[]>('http://localhost:3000/missions').subscribe(data => {
            this.missions = data;
            this.missionsIsLoading = false;
            this.missionsIsLoaded = true;
        });
    }

    addNewMission(mission: Mission) {
        this.httpClient.post('http://localhost:3000/missions/add', mission).subscribe(data => {
            this.toastr.success('La mission a bien été créée', 'Mission créée');
            this.router.navigateByUrl('mission-list');
        })
    }
    
    editMission(mission: Mission) {
        this.httpClient.put(`http://localhost:3000/missions/update/${mission.id_mission}`, mission).subscribe(data => {
            this.toastr.success('La mission a bien été éditée', 'Mission éditée');
            this.router.navigateByUrl('mission-list');
        });
    }

    deleteMission(idMission: number) {
        this.httpClient.delete<any>(`http://localhost:3000/missions/del/${idMission}`).subscribe(() => {
            this.missions = [...this.missions.filter(mission => mission.id_mission !== idMission)];
            this.toastr.success(`La mission n°${idMission} a bien été supprimée`, 'Mission supprimée');
        });
    }
}
