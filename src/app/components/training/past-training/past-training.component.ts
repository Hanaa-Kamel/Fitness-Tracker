import { Subscription } from 'rxjs';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import {MatSort} from '@angular/material/sort';
import {PageEvent} from '@angular/material/paginator';
import * as fromTraining from '../training.reducer';
import { Store } from '@ngrx/store';
import { TrainingService } from '../training.service';
import { Exercise } from './../exercise.model';
@Component({
  selector: 'app-past-training',
  templateUrl: './past-training.component.html',
  styleUrls: ['./past-training.component.css']
})
export class PastTrainingComponent implements OnInit {
  displayedColumns = ['date' , 'name' , 'calories' , 'duration' , 'state'];
  dataSource = new MatTableDataSource<Exercise>();
  @ViewChild(MatSort) sort: MatSort;
  private exChangedSubscription : Subscription;
 
   // MatPaginator Inputs
   length = 100;
   pageSize = 10;
   pageSizeOptions: number[] = [1,5, 10, 25, 100];
   // MatPaginator Output
  pageEvent: PageEvent;
  constructor(private trainingService : TrainingService , private store : Store<fromTraining.State>) { }

  ngOnInit(): void {
    this.store.select(fromTraining.getFinishedExercises).subscribe(
      (exercises : Exercise[])=>{
        this.dataSource.data = exercises;
      }
    )
    this.trainingService.fetchCompletedOrCancelledExercise();
  }

 

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }


  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  setPageSizeOptions(setPageSizeOptionsInput: string) {
    if (setPageSizeOptionsInput) {
      this.pageSizeOptions = setPageSizeOptionsInput.split(',').map(str => +str);
    }
  }

 
}
