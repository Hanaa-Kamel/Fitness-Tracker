import { StartLoading, StopLoading } from './../shared/ui.actions';
import { Store } from '@ngrx/store';
import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { AngularFirestore } from '@angular/fire/firestore';
import { map, take } from 'rxjs/operators';
import { Subscription } from "rxjs";
import { Exercise } from "./exercise.model";
import { UIService } from "../shared/ui.service";
import * as UI from '../shared/ui.actions'
import * as fromTraining from './training.reducer'
import * as Training from './training.actions'


@Injectable()
export class TrainingService{
    
    constructor(private firestore: AngularFirestore, private uiService:UIService, private store : Store<fromTraining.State>){}
    exerciseChanged = new Subject<Exercise>();
    exercisesChanged = new Subject<Exercise[]>();
    finishedExercisesChanged = new Subject<Exercise[]>();

    private availableExercises : Exercise[] =[]
    private runningExercise : Exercise;
    private fbSubs : Subscription[]=[];
   

    featchAvailableExercises(){
      
        this.store.dispatch(new UI.StartLoading());
        this.fbSubs.push(this.firestore.collection('availableExercises').
        snapshotChanges().pipe(map(docArry =>{
          return docArry.map(doc=>{
            return{
              id : doc.payload.doc.id,
              name : doc.payload.doc.data()['name'],
              duration :doc.payload.doc.data()['duration'],
              calories : doc.payload.doc.data()['calories']
            };
          });
        })).subscribe((exercises : Exercise[])=>{
      
        this.store.dispatch(new UI.StopLoading());
        this.store.dispatch(new Training.setAvilableTraining(exercises ))
        
        },error =>{
            this.store.dispatch(new UI.StopLoading());
            this.uiService.showSnakBar('Fetching Exercises Failed , Please Try again later' , null , 3000)
            this.exercisesChanged.next(null)
        } ));
        }

    startExercises(selectedId : string){
        this.store.dispatch(new Training.startTraining( selectedId))

    }

    completeExercise(){
        this.store.select(fromTraining.getActiveTraining).pipe(take(1)).subscribe(ex =>{
            this.addDataToDatabase({
                ...ex,
                date : new Date(), 
                state : 'Complete'});
           
        this.store.dispatch(new Training.stopTraining( ))
    });
    }

    cancelExercise(progress : number){
        this.store.select(fromTraining.getActiveTraining).pipe(take(1)).subscribe(ex =>{
            this.addDataToDatabase({
                ...ex, 
                duration : ex.duration * ( progress / 100 ),
                calories : ex.calories * ( progress / 100 ),
                date : new Date(), state : 'Cancelled'
            });
                this.store.dispatch(new Training.stopTraining( ))
    });

    }



    fetchCompletedOrCancelledExercise(){
       this.fbSubs.push( this.firestore.collection('finishedExercises').valueChanges().subscribe(
            (exercises : Exercise[])=>{
                this.store.dispatch(new Training.setFinishedTraining(exercises ))

            }
        ));
    }

    cancleSubscription(){
        this.fbSubs.forEach(sub=> sub.unsubscribe())
    }
    private addDataToDatabase(exercise:Exercise){
        this.firestore.collection('finishedExercises').add(exercise);

    }
}