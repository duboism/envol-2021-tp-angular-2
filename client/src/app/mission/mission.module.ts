import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MissionRoutingModule } from './mission-routing.module';
import { MissionService } from './mission.service';
import { MissionListComponent } from './mission-list.component';
import { MissionListTableComponent } from './mission-list-table.component';

@NgModule({
    declarations: [
        MissionListComponent,
        MissionListTableComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        MissionRoutingModule
    ],
    providers: [
        MissionService
    ]
})
export class MissionModule { }