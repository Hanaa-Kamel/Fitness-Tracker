import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { UIService } from '../../shared/ui.service';

import { AuthService } from '../auth.service';

@Component({
  selector: 'app-singup',
  templateUrl: './singup.component.html',
  styleUrls: ['./singup.component.css']
})
export class SingupComponent implements OnInit  , OnDestroy{
  maxDate = new Date();
  isLoading = false;
  private loadingSubs : Subscription;
  constructor(private authService:AuthService,private uiService : UIService) { }

  ngOnInit(): void {
    this.loadingSubs = this.uiService.loadingStateChanged.subscribe(isLoading => {
      this.isLoading = isLoading;
    });
    this.maxDate.setFullYear(this.maxDate.getFullYear() - 18 ) ;

  }

  onSubmit(form :NgForm)
  {
    // console.log(form);
    this.authService.registerUser({
      email : form.value.email,
      password : form.value.password
    })
  };


  ngOnDestroy(){
    if(this.loadingSubs){
      this.loadingSubs.unsubscribe();
    }
  }

}
