
import { SharedModule } from './../shared/shared.module';
import { AuthRoutinModule } from './auth-routing.module';
import { NgModule } from '@angular/core';
import { AngularFireAuthModule } from '@angular/fire/auth';

import { ReactiveFormsModule } from '@angular/forms';


import { LoginComponent } from './login/login.component';
import { SingupComponent } from './singup/singup.component';

@NgModule({
    declarations:[
        SingupComponent,
        LoginComponent
    ],
    imports :[
        ReactiveFormsModule,
        AngularFireAuthModule,
        SharedModule,
        AuthRoutinModule
    ]
})
export class AuthModule {}