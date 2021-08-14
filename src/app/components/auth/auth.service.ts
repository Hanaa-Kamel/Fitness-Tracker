import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Subject } from "rxjs";
import { AngularFireAuth } from '@angular/fire/auth';

import { AuthData } from "./auth-data.model";

import { TrainingService } from "../training/training.service";

@Injectable()

export class AuthService{
    authChange = new Subject<boolean>();
    private isAuthenticated = false;
    email: string = '';
    password: string = '';
  
    constructor(private router:Router,private afAuth: AngularFireAuth,private triningService : TrainingService){}

    initAuthListener(){
        this.afAuth.authState.subscribe(user=>{
            if(user){
                this.isAuthenticated = true;
                this.authChange.next(true);
                this.router.navigate(['/trining']);
            }else{
                this.triningService.cancleSubscription();
                this.authChange.next(false);
                this.router.navigate(['/login']);
                this.isAuthenticated = false;
            }
        })
    }
    registerUser(authData:AuthData){
        this.afAuth.createUserWithEmailAndPassword(
            authData.email,
            authData.password
        ).then(res=>{
            console.log(res)
        }).catch(err=>console.log(err))
    }

    login(authData : AuthData){
        this.afAuth.signInWithEmailAndPassword(
            authData.email,
            authData.password
        ).then(res=>{
           {
                console.log(res) ;
              this.isLoggedIn();
            }
        }).catch(err=>
            {
                console.log(err, authData.email,
                    authData.password);
                this.isLoggedIn();
            })
    }

    logout(){
        this.afAuth.signOut();
    }

    isAuth(){
        return this.isAuthenticated;
    }
    isLoggedIn() {
        this.afAuth.onAuthStateChanged(auth => {
          if (auth) {
            console.log(auth);
          } else {

            console.log('User logged out',auth);
          }
        });
      }
}