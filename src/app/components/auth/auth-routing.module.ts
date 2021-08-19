import { Routes, RouterModule } from '@angular/router';
import { NgModule } from "@angular/core";
import { LoginComponent } from './login/login.component';
import { SingupComponent } from './singup/singup.component';

const routes :Routes = [
    {path:'singup', component :SingupComponent},
    {path:'login', component: LoginComponent},
]

@NgModule({
    imports :[ 
        RouterModule.forChild(routes)
    ],
    exports :[
        RouterModule
    ]

})
export class AuthRoutinModule{}