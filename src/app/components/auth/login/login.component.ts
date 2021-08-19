import { map } from 'rxjs/operators';
import { Observable, Subscription } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';

// import { UIService } from '../../shared/ui.service';
import { AuthService } from '../auth.service';
import * as fromRoot from '../../../app.reducer';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm : FormGroup;
 
  isLoading$ : Observable<boolean>
  
  constructor(private authService:AuthService,
   
    private store : Store<fromRoot.State> ) { }

  ngOnInit(): void {
    this.isLoading$ = this.store.select(fromRoot.getIsLoading);
    
    this.loginForm= new FormGroup({
      email : new FormControl('', {
        validators : [Validators.required , Validators.email]
      }),
      password : new FormControl('' , {
        validators : [Validators.required ]

      })
    })
    console.log(this.loginForm.value)
  }

  onSubmit()
  {
    this.authService.login({
      email : this.loginForm.value.email,
      password : this.loginForm.value.password


    });
    // console.log('helloooooooooooo');
  }

  // ngOnDestroy(){
  //   if(this.loadingSubs){
  //     this.loadingSubs.unsubscribe();
  //   }
  // }


}
