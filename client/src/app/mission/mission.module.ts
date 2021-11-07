import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';

import { MissionRoutingModule } from './mission-routing.module';
import { MissionService } from './mission.service';
import { MissionListComponent } from './mission-list.component';
import { MissionListTableComponent } from './mission-list-table.component';
import { NewMissionComponent } from './new-mission.component';
import { EditMissionComponent } from './edit-mission.component';
import { MissionFormComponent } from './mission-form.component';

@NgModule({
    declarations: [
        MissionListComponent,
        MissionListTableComponent,
        NewMissionComponent,
        EditMissionComponent,
        MissionFormComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        MissionRoutingModule,
        BsDatepickerModule.forRoot()
    ],
    providers: [
        MissionService
    ]
})
export class MissionModule { }