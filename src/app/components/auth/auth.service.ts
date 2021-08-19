import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { AngularFireAuth } from '@angular/fire/auth';
import { Store } from '@ngrx/store';


import { AuthData } from './auth-data.model';
import { MatSnackBar } from '@angular/material/snack-bar';
import { TrainingService } from '../training/training.service';
import { UIService } from '../shared/ui.service';
import * as fromRoot from '../../app.reducer';
import * as UI from '../shared/ui.actions';
import * as Auth from './auth.actions' 

@Injectable()
export class AuthService {
    // authChange = new Subject<boolean>();
    // private isAuthenticated = false;
    email: string = '';
    password: string = '';

    constructor(
        private router: Router,
        private afAuth: AngularFireAuth,
        private triningService: TrainingService,
        private snakPar: MatSnackBar,
        private uiService: UIService,
        private store : Store<fromRoot.State>
    ) { }

    initAuthListener() {
        this.afAuth.authState.subscribe((user) => {
            if (user) {
                this.store.dispatch(new Auth.setAuthenticated());
                // this.isAuthenticated = true;
                // this.authChange.next(true);
                this.router.navigate(['/trining']);
            } else {
                this.triningService.cancleSubscription();
                
                this.router.navigate(['/login']);
                // this.isAuthenticated = false;
                // this.authChange.next(false);
                this.store.dispatch(new Auth.setUuathenticated());

            }
        });
    }
    registerUser(authData: AuthData) {
        // this.uiService.loadingStateChanged.next(true);
        this.store.dispatch(new UI.StartLoading());
        this.afAuth
            .createUserWithEmailAndPassword(authData.email, authData.password)
            .then(() => {
                // this.uiService.loadingStateChanged.next(false);
        this.store.dispatch(new UI.StopLoading());

            })
            .catch((error) => {
                // this.uiService.loadingStateChanged.next(false);
                this.store.dispatch(new UI.StopLoading());
                
                this.uiService.showSnakBar(error.message , null ,3000);
            });
    }

    login(authData: AuthData) {
        // this.uiService.loadingStateChanged.next(true);
        this.store.dispatch(new UI.StartLoading());

        this.afAuth
            .signInWithEmailAndPassword(authData.email, authData.password)
            .then(() => {
                    // this.uiService.loadingStateChanged.next(false); 
                this.store.dispatch(new UI.StopLoading());

            })
            .catch((error) => {
                // this.uiService.loadingStateChanged.next(false);
                this.store.dispatch(new UI.StopLoading());

                this.uiService.showSnakBar(error.message , null ,3000);

            });
    }

    logout() {
        this.afAuth.signOut();
    }

   
}
