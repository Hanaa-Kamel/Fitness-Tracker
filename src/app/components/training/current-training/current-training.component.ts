import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import {ThemePalette} from '@angular/material/core';
import {ProgressSpinnerMode} from '@angular/material/progress-spinner';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { StopTrainingComponent } from './stop-training.component';

@Component({
  selector: 'app-current-training',
  templateUrl: './current-training.component.html',
  styleUrls: ['./current-training.component.css']
})
export class CurrentTrainingComponent implements OnInit {
  @Output() trainingExit = new EventEmitter();
  color: ThemePalette = 'primary';
  mode: ProgressSpinnerMode = 'determinate';
  // value = 50;
  progress = 0;
  timer : number;
  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
   this.startOrResumeTimer();
  }

  startOrResumeTimer(){
    this.timer = setInterval(()=>{
      this.progress = this.progress+5;
      if(this.progress>100){
        clearInterval(this.timer)
      }
    },1000);
  }

  onStop(){
    clearInterval(this.timer);
    const dialogRef =this.dialog.open(StopTrainingComponent, {
     
      data: {progress: this.progress}
    });
    dialogRef.afterClosed().subscribe(result => {
      // console.log(result);
      if(result){
        this.trainingExit.emit();
      }else{
        this.startOrResumeTimer();
      }
      
    });
  }

}
