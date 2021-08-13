import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { Observable , Subscription } from 'rxjs';
// import { map } from 'rxjs/add/operator/map'

import { Exercise } from '../exercise.model';
import { TrainingService } from '../training.service';

@Component({
  selector: 'app-new-training',
  templateUrl: './new-training.component.html',
  styleUrls: ['./new-training.component.css']
})
export class NewTrainingComponent implements OnInit , OnDestroy{
   exercises:Exercise[] ;
  exercisesSubscription :Subscription;
  
  constructor(private trainingService:TrainingService) {
   }
 
 
  ngOnInit(): void {
    this.exercisesSubscription = this.trainingService.exercisesChanged.subscribe(
      exercises =>{this.exercises = exercises}
    )
    this.trainingService.featchAvailableExercises();

  }

  onStartTraining(form : NgForm){
    this.trainingService.startExercises(form.value.exercise);
  }
  ngOnDestroy(){
    this.exercisesSubscription.unsubscribe()
  }
}
