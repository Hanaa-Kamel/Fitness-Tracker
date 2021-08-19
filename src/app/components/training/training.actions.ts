import { Exercise } from './exercise.model';
import { Action } from "@ngrx/store";


export const SET_AVILABLE_TRAINING= '[Training] Set Avilable Training ';
export const SET_FINISHED_TRAINING = '[Training] Set Finished Taining';
export const START_TRAINIG = '[Training] Start Training';
export const STOP_TRAINING = '[Training] Stop Training';

export class setAvilableTraining implements Action{
    readonly type = SET_AVILABLE_TRAINING;
    constructor (public payload : Exercise[]){

    }
}

export class setFinishedTraining implements Action{
    readonly type = SET_FINISHED_TRAINING;
    constructor (public payload : Exercise[]){

    }
}

export class startTraining implements Action{
    readonly type = START_TRAINIG;
    constructor (public payload : string){

    }
}

export class stopTraining implements Action{
    readonly type = STOP_TRAINING;
  
}

export type TrainingActions = setAvilableTraining | setFinishedTraining | startTraining | stopTraining;