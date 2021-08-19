import { getIsLoading } from './../../shared/ui.reducer';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { Observable , Subscription } from 'rxjs';
import { UIService } from '../../shared/ui.service';
import * as UI from '../../shared/ui.actions';
import { Store } from '@ngrx/store';
import * as fromTraining from '../training.reducer' 
import * as fromRoot from '../../../app.reducer'

import { Exercise } from '../exercise.model';
import { TrainingService } from '../training.service';

@Component({
  selector: 'app-new-training',
  templateUrl: './new-training.component.html',
  styleUrls: ['./new-training.component.css']
})
export class NewTrainingComponent implements OnInit {
   exercises$ : Observable<Exercise[]> ;
   isLoading$ : Observable<boolean>

  
  constructor(private trainingService:TrainingService, private uiService : UIService , private store : Store<fromTraining.State>) {
   }
 
 
  ngOnInit(): void {
    this.isLoading$ = this.store.select(fromRoot.getIsLoading);
    this.exercises$ = this.store.select(fromTraining.getAvilableExercises);
    
this.fetchExercises();
  }

  fetchExercises(){
    this.trainingService.featchAvailableExercises();

  }

  onStartTraining(form : NgForm){
    this.trainingService.startExercises(form.value.exercise);
  }
 

 
}
