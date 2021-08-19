import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from './components/auth/auth.guard';
import { WelcomeComponent } from './components/welcome/welcome.component';

const routes: Routes = [
  {path:'', component : WelcomeComponent},
  {path :'trining' , loadChildren : () => import ('./components/training/training.module').then( m => m.TrianingModule) ,
    canLoad :[AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class AppRoutingModule { }
