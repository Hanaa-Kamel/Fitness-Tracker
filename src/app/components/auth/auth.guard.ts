import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { CanActivate , CanLoad,Route  ,Router,RouterStateSnapshot,ActivatedRouteSnapshot} from '@angular/router';
import { AuthService } from "./auth.service";
import { Store } from "@ngrx/store";
import * as fromRoot from '../../app.reducer'

@Injectable()

export class AuthGuard implements CanActivate ,CanLoad{

    constructor(private store: Store<fromRoot.State> , private router : Router){} 

    canActivate(route: ActivatedRouteSnapshot,state: RouterStateSnapshot )
    : Observable<boolean> | Promise<boolean> |boolean {
        // if ( this.authService.isAuth()) {
        //     return true;
        // } else {
        //     return this.router.navigate(['/login'])
        // }
        return this.store.select(fromRoot.getAuth);
    }

    canLoad(route: Route)  {
        // if ( this.authService.isAuth()) {
        //     return true;
        // } else {
        //     return this.router.navigate(['/login'])
        // }
        return this.store.select(fromRoot.getAuth);

    }
}