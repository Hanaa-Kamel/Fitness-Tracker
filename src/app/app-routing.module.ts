import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/auth/login/login.component';
import { SingupComponent } from './components/auth/singup/singup.component';
import { TrainingComponent } from './components/training/training.component';

import { WelcomeComponent } from './components/welcome/welcome.component';

const routes: Routes = [
  {path:'', component : WelcomeComponent},
  {path:'singup', component :SingupComponent},
  {path:'login', component: LoginComponent},
  {path:'trining', component: TrainingComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
