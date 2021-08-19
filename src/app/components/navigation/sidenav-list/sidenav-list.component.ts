import { Component, OnInit ,Output,EventEmitter, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Store } from '@ngrx/store';
import * as fromRoot from '../../../app.reducer';

import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-sidenav-list',
  templateUrl: './sidenav-list.component.html',
  styleUrls: ['./sidenav-list.component.css']
})
export class SidenavListComponent implements OnInit {
  @Output() closeSidenav= new EventEmitter<void>();
  isAuth$ : Observable<boolean>;
  authSubscription : Subscription;

  constructor(private authService:AuthService, private store : Store<fromRoot.State>) { }
 

  ngOnInit(): void {
    this.isAuth$ = this.store.select(fromRoot.getAuth)
  }

  onClose(){
    this.closeSidenav.emit();
  }

  onLogout(){
    this.authService.logout();
    this.onClose();
    
}

}
