import { Component, OnInit } from '@angular/core';
import {ThemePalette} from '@angular/material/core';
import {ProgressSpinnerMode} from '@angular/material/progress-spinner';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { StopTrainingComponent } from './stop-training.component';
import { TrainingService } from '../training.service';

@Component({
  selector: 'app-current-training',
  templateUrl: './current-training.component.html',
  styleUrls: ['./current-training.component.css']
})
export class CurrentTrainingComponent implements OnInit {

  color: ThemePalette = 'primary';
  mode: ProgressSpinnerMode = 'determinate';
  // value = 50;
  progress = 0;
  timer : number;
  constructor(public dialog: MatDialog , private trainingService:TrainingService) { }

  ngOnInit(): void {
   this.startOrResumeTimer();
  }

  startOrResumeTimer(){
    //100 is our fixed max percentage
    //1000 milli seconds
    const step = this.trainingService.gerRunningExercise().duration / 100 * 1000 ;
    this.timer = setInterval(()=>{
      this.progress = this.progress+5;
      if(this.progress>100){
        this.trainingService.completeExercise();
        clearInterval(this.timer)
      }
    },step);
  }

  onStop(){
    clearInterval(this.timer);
    const dialogRef =this.dialog.open(StopTrainingComponent, {
     
      data: {progress: this.progress}
    });
    dialogRef.afterClosed().subscribe(result => {
      // console.log(result);
      if(result){
        this.trainingService.cancelExercise(this.progress);
      }else{
        this.startOrResumeTimer();
      }
      
    });
  }

}
