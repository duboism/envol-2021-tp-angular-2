import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MissionListComponent } from './mission-list.component';
import { AuthGuard } from '../login/auth.guard';
import { NewMissionComponent } from './new-mission.component';
import { EditMissionComponent } from './edit-mission.component';

const routes: Routes = [
    { path: 'mission-list', component: MissionListComponent, canActivate: [AuthGuard] },
    { path: 'new-mission', component: NewMissionComponent, canActivate: [AuthGuard] },
    { path: 'edit-mission/:id_mission', component: EditMissionComponent, canActivate: [AuthGuard] },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class MissionRoutingModule { }
