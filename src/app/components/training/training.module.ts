import { NgModule } from '@angular/core';

import { AngularFirestoreModule } from '@angular/fire/firestore';
import { SharedModule } from './../shared/shared.module';

import { CurrentTrainingComponent } from './current-training/current-training.component';
import { NewTrainingComponent } from './new-training/new-training.component';
import { PastTrainingComponent } from './past-training/past-training.component';
import { TrainingComponent } from './training.component';
import { StopTrainingComponent } from './current-training/stop-training.component';
import { StoreModule } from '@ngrx/store';
import { TrainigRoutingModule } from './training-routing.modul';
import {trainingReducer} from './training.reducer'

@NgModule({
    declarations:[
        TrainingComponent,
        CurrentTrainingComponent,
        NewTrainingComponent,
        PastTrainingComponent,
        StopTrainingComponent
    ],
    imports:[
        SharedModule,
        TrainigRoutingModule,
        AngularFirestoreModule,
        StoreModule.forFeature('training', trainingReducer)
    ]
 
})
export class TrianingModule {
    
}