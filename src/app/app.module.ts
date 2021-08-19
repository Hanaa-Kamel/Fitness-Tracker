import { TrianingModule } from './components/training/training.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { environment } from '../environments/environment';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule  } from '@angular/fire/firestore';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { StoreModule } from '@ngrx/store';


import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AuthModule } from './components/auth/auth.module';

import { WelcomeComponent } from './components/welcome/welcome.component';
import { HeaderComponent } from './components/navigation/header/header.component';
import { SidenavListComponent } from './components/navigation/sidenav-list/sidenav-list.component';
import { AuthService } from './components/auth/auth.service';
import { TrainingService } from './components/training/training.service';
import { UIService } from './components/shared/ui.service';
import { SharedModule } from './components/shared/shared.module';
import { reducers } from './app.reducer';




@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    HeaderComponent,
    SidenavListComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MaterialModule,
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    AngularFireDatabaseModule,
    AuthModule,
    SharedModule,
    TrianingModule,
    StoreModule.forRoot(reducers)
  ],
  providers: [
    AuthService,
    TrainingService,
    UIService],
  bootstrap: [AppComponent],
  
})
export class AppModule { }
