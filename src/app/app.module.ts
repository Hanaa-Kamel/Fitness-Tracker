import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { environment } from '../environments/environment';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule  } from '@angular/fire/firestore';
import { AngularFireDatabaseModule } from '@angular/fire/database';

import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';


import { SingupComponent } from './components/auth/singup/singup.component';
import { LoginComponent } from './components/auth/login/login.component';
import { TrainingComponent } from './components/training/training.component';
import { CurrentTrainingComponent } from './components/training/current-training/current-training.component';
import { NewTrainingComponent } from './components/training/new-training/new-training.component';
import { PastTrainingComponent } from './components/training/past-training/past-training.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { HeaderComponent } from './components/navigation/header/header.component';
import { SidenavListComponent } from './components/navigation/sidenav-list/sidenav-list.component';
import { StopTrainingComponent } from './components/training/current-training/stop-training.component';
import { AuthService } from './components/auth/auth.service';
import { TrainingService } from './components/training/training.service';

// const firebaseConfig = {
//   apiKey: "AIzaSyAAyBDB03N8L_35FZ9Hl8SkqCOM43UkCgQ",
//   authDomain: "ng-fitness-tracker-a725f.firebaseapp.com",
//   projectId: "ng-fitness-tracker-a725f",
//   storageBucket: "ng-fitness-tracker-a725f.appspot.com",
//   messagingSenderId: "295973669363",
//   appId: "1:295973669363:web:21e5eb325c8c7ce1a72a86",
//   measurementId: "G-L07GYLHW0W"
// };
@NgModule({
  declarations: [
    AppComponent,
    SingupComponent,
    LoginComponent,
    TrainingComponent,
    CurrentTrainingComponent,
    NewTrainingComponent,
    PastTrainingComponent,
    WelcomeComponent,
    HeaderComponent,
    SidenavListComponent,
    StopTrainingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MaterialModule,
    FormsModule,
    BrowserModule,
    // AngularFireModule.initializeApp({
    //   apiKey: "AIzaSyAAyBDB03N8L_35FZ9Hl8SkqCOM43UkCgQ",
    //   authDomain: "ng-fitness-tracker-a725f.firebaseapp.com",
    //   projectId: "ng-fitness-tracker-a725f",
    //   storageBucket: "ng-fitness-tracker-a725f.appspot.com",
    //   messagingSenderId: "295973669363",
    //   appId: "1:295973669363:web:21e5eb325c8c7ce1a72a86",
    //   measurementId: "G-L07GYLHW0W"
    // }),
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    AngularFireDatabaseModule
  ],
  providers: [
    AuthService,
    TrainingService],
  bootstrap: [AppComponent],
  
})
export class AppModule { }
