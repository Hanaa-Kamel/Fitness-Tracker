import { Exercise } from './exercise.model';
import * as fromRoot from '../../app.reducer'

import { TrainingActions , SET_AVILABLE_TRAINING , SET_FINISHED_TRAINING , STOP_TRAINING ,START_TRAINIG} from "./training.actions";
import { createFeatureSelector, createSelector } from '@ngrx/store';


export interface TrainingState{
    avilableExercises : Exercise[];
    finshedExercises : Exercise[];
    activeTraining : Exercise;
}

export interface State extends fromRoot.State{
    training : TrainingState
}


const initalState : TrainingState ={
    avilableExercises :[],
    finshedExercises :[],
    activeTraining : null
   }

export function trainingReducer(state = initalState , action : TrainingActions){
    switch(action.type){
        case SET_AVILABLE_TRAINING :
            return {
                ...state,
                avilableExercises : action.payload
            };
            case SET_FINISHED_TRAINING:
                return {
                ...state,
                finshedExercises : action.payload
            };
            case START_TRAINIG:
                return {
                ...state,
                activeTraining : {...state.avilableExercises.find(ex => ex.id === action.payload)}
             };
            case STOP_TRAINING:
                return {
                    ...state,
                    activeTraining : null
            };
        default:{
            return state
        }
    }
}

export const getTrainingState = createFeatureSelector<TrainingState>('training');


export const getAvilableExercises = createSelector(getTrainingState,(state : TrainingState)=> state.avilableExercises);
export const getFinishedExercises =  createSelector(getTrainingState,(state : TrainingState)=> state.finshedExercises);
export const getActiveTraining = createSelector(getTrainingState, (state : TrainingState)=> state.activeTraining);
export const getIsTraining = createSelector(getTrainingState, (state : TrainingState)=> state.activeTraining != null);